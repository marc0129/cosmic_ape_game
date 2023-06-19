const { 
    Account_Transaction,
    Bank_Channel,
    Bank_Ledger,
    Currency,
    Unconfirmed_Signature,
    sequelize
} = require('../../models/index');

const Redis = require("ioredis");
const getBankChannelByType = require('../../utils/bank/get-bank-channel-by-type');
const getTransactionDetailsFromSignature = require('../../utils/transaction/get-transaction-details-from-signature');
const { BANK_REQUEST_USER_DEPOSIT, BANK_REQUEST_USER_WITHDRAW } = require('../../static/bank-request-types');
const uuid4 = require('uuid4');
const getOrCreateAccountIfNeeded = require('../../utils/accounts/get-or-create-account-if-needed');
const { TRANSACTION_USER_DEPOSIT, TRANSACTION_USER_WITHDRAW } = require('../../static/transaction-types');
const getCurrenciesByAccounts = require('../../utils/currencies/get-currencies-by-accounts');
const sendCosmicToAccount = require('../../utils/transaction/send-cosmic-to-account');
const delay = require('../../utils/statics/delay');

const redis = new Redis({
    port: process.env.REDIS_PORT, // Redis port
    host: process.env.REDIS_HOST, // Redis host
});

module.exports = {
    async depositStart(req, res) {
        const {
            amount
        } = req.body
        
        
        if (!amount) {
            return res.status(200).json({
              msg: "Invalid Amount"
            })
        }
        try {
            await sequelize.transaction(async transaction => {
                const depositChannel = await getBankChannelByType({ type: 'deposit_holding', transaction })

                const bankLedger = await Bank_Ledger.create({
                    channel: depositChannel.id,
                    request_type: BANK_REQUEST_USER_DEPOSIT,
                    amount,
                    unique_ref: uuid4(),
                    status: 'started',
                }, { 
                    transaction 
                })

                return res.json({
                    ...bankLedger.dataValues,
                    toPubKey: depositChannel.public_wallet_address,
                })
            })
        } catch (err) {
            console.log(err)

            return res.status(400).json({
                msg: `Failed to start the deposit - ${err.message}`
            })
        }
    },

    async depositComplete(req, res) {
        const {
            signature,
            unique_ref,
            wallet,
        } = req.body
        
        if (!signature || !unique_ref) {
            return res.status(200).json({
              msg: "Invalid Amount"
            })
        }
        
        try {
            let transactionDetails = null, retry = 5

            while (!transactionDetails && retry > 0) {
                transactionDetails = await getTransactionDetailsFromSignature(signature)

                if (!transactionDetails) {
                    retry --
                    await delay(5000)
                }
            }
            console.log(`fetched transaction for signature(${signature})`, transactionDetails)

            if (!transactionDetails) {
                const unconfirmedSignature = await Unconfirmed_Signature.create(
                    {
                        signature,
                        confirmed: false,
                        address: wallet,
                        unique_ref,
                    },
                )

                return res.json({
                    msg: 'The transaction is not confirmed or finalized yet, your $COSMIC balance will be updated once the transaction is finalized'
                })
            }
            const transactionAmount = transactionDetails.transaction.message.instructions[0].parsed.info.amount
            const transactionType = transactionDetails.transaction.message.instructions[0].parsed.type
            const transactionAccounts = (transactionDetails.meta.postTokenBalances || []).map(balance => balance.owner)

            await sequelize.transaction(async transaction => {
                const bankLedgerBySignature = await Bank_Ledger.findOne({
                    where: {
                        signature,
                    }
                }, {
                    transaction
                })
                
                if (!!bankLedgerBySignature) {
                    throw new Error('This signature is already recorded')
                }

                const bankLedger = await Bank_Ledger.findOne({
                    where: {
                        request_type: BANK_REQUEST_USER_DEPOSIT,
                        unique_ref,
                        status: 'started'
                    },
                    include: Bank_Channel,
                }, {
                    transaction
                })
                
                if (!bankLedger) {
                    throw new Error('This transaction is not started or already completed')
                }

                if (Number(bankLedger.amount) * Math.pow(10, process.env.COSMIC_DECIMAL) !== Number(transactionAmount)
                    || transactionType !== 'transfer'
                    || !transactionAccounts.find(account => account === bankLedger.Bank_Channel?.public_wallet_address)
                ) {
                    throw new Error('This signature is not for $COSMIC transfer')
                }

                bankLedger.set({
                    status: 'completed',
                    signature
                })

                const updatedBankLedger = await bankLedger.save({ transaction })

                await redis.del(`Account_${wallet}`)
                const account = await getOrCreateAccountIfNeeded({ address: wallet, transaction })
                const cosmic = await Currency.findOne({
                    where: {
                        name: 'Cosmic'
                    }
                })
                const now = new Date()

                const cosmicTransaction = await Account_Transaction.create(
                    {
                      account_id: account.id,
                      currency_id: cosmic.id,
                      amount: Number(bankLedger.amount),
                      transaction_date: now,
                      source_of_transaction: {
                        type: TRANSACTION_USER_DEPOSIT,
                        requested_amount: bankLedger.amount,
                        account_id: account.id,
                      },
                      audit_fields: {
                        transaction_date: now,
                      },
                      is_settlement: false,
                    },
                    { transaction }
                )

                return res.json(updatedBankLedger)
            })
        } catch (err) {
            console.log(err)

            if (err.message === 'This transaction is not started or already completed'
                || err.message === 'This signature is already recorded'
                || err.message === 'This signature is not for $COSMIC transfer'
            ) {
                return res.status(400).json({
                    msg: err.message
                })
            } else {
                return res.status(400).json({
                    msg: `Failed to complete the deposit - ${err.message}`
                })
            }
        }
    },
    
    async withdraw(req, res) {
        const {
            amount,
            wallet,
        } = req.body
        
        
        if (!amount || !wallet) {
            return res.status(200).json({
              msg: "Invalid Parameters"
            })
        }

        try {
            await sequelize.transaction(async transaction => {
                const withdrawChannel = await getBankChannelByType({ type: 'withdraw_holding', transaction })
                const account = await getOrCreateAccountIfNeeded({ address: wallet, transaction })

                const accountTransactions = await getCurrenciesByAccounts({
                    accounts: [account],
                    transaction,
                })

                const cosmic = accountTransactions.find(trx => trx.Currency.name === 'Cosmic')

                if ((cosmic?.amount || 0) < amount) {
                    throw new Error(`Not enough $COSMIC to withdraw ${amount} $COSMIC`)
                }

                const bankLedger = await Bank_Ledger.create({
                    channel: withdrawChannel.id,
                    request_type: BANK_REQUEST_USER_WITHDRAW,
                    amount,
                    unique_ref: uuid4(),
                    status: 'started',
                }, { 
                    transaction 
                })

                const signature = await sendCosmicToAccount({ address: wallet, amount })
                
                await redis.del(`Account_${wallet}`)
                const now = new Date()

                const cosmicTransaction = await Account_Transaction.create(
                    {
                      account_id: account.id,
                      currency_id: cosmic.Currency.id,
                      amount: -amount,
                      transaction_date: now,
                      source_of_transaction: {
                        type: TRANSACTION_USER_WITHDRAW,
                        requested_amount: amount,
                        account_id: account.id,
                      },
                      audit_fields: {
                        transaction_date: now,
                      },
                      is_settlement: false,
                    },
                    { transaction }
                )

                bankLedger.set({
                    signature,
                    status: 'completed',
                })

                await bankLedger.save({ transaction })

                return res.json({
                    ...bankLedger.dataValues,
                    toPubKey: withdrawChannel.public_wallet_address,
                })
            })
        } catch (err) {
            console.log(err)

            if (err.message.startsWith('Not enough $COSMIC')) {
                return res.status(400).json({
                    msg: err.message
                })
            } else {
                return res.status(400).json({
                    msg: `Failed to start the deposit - ${err.message}`
                })
            }
        }
    },
    
    async verifyUnconfirmedSignatures(req, res) {       
        try {
            await sequelize.transaction(async transaction => {
                const unconfirmedSignatures = await Unconfirmed_Signature.findAll({
                    where: {
                        confirmed: false,
                    },
                    include: [{
                        model: Bank_Ledger,
                        include: Bank_Channel
                    }]
                }, { transaction })

                const cosmic = await Currency.findOne({
                    where: {
                        name: 'Cosmic'
                    }
                }, { transaction })

                const now = new Date()

                const transactionDetails = await Promise.all(
                    unconfirmedSignatures.map(async sign => {
                        try {
                            if (!sign || !sign.Bank_Ledger || sign.Bank_Ledger.status !== 'started') {
                                throw new Error('Bank Ledger is not available')
                            }

                            const transactionDetail = await getTransactionDetailsFromSignature(sign.signature)
                            if (!transactionDetail) return false

                            const transactionAmount = transactionDetail.transaction.message.instructions[0].parsed.info.amount
                            const transactionType = transactionDetail.transaction.message.instructions[0].parsed.type
                            const transactionAccounts = (transactionDetail.meta.postTokenBalances || []).map(balance => balance.owner)
                            const signature = sign.signature
                
                            const bankLedgerBySignature = await Bank_Ledger.findOne({
                                where: {
                                    signature,
                                }
                            }, {
                                transaction
                            })
                            
                            if (!!bankLedgerBySignature) {
                                throw new Error('This signature is already recorded')
                            }
            
                            const bankLedger = sign.Bank_Ledger
            
                            if (Number(bankLedger.amount) * Math.pow(10, process.env.COSMIC_DECIMAL) !== Number(transactionAmount)
                                || transactionType !== 'transfer'
                                || !transactionAccounts.find(account => account === bankLedger.Bank_Channel?.public_wallet_address)
                            ) {
                                throw new Error('This signature is not for $COSMIC transfer')
                            }
            
                            bankLedger.set({
                                status: 'completed',
                                signature
                            })
            
                            const updatedBankLedger = await bankLedger.save({ transaction })
            
                            await redis.del(`Account_${sign.address}`)
                            const account = await getOrCreateAccountIfNeeded({ address: sign.address, transaction })
            
                            const cosmicTransaction = await Account_Transaction.create(
                                {
                                    account_id: account.id,
                                    currency_id: cosmic.id,
                                    amount: Number(bankLedger.amount),
                                    transaction_date: now,
                                    source_of_transaction: {
                                        type: TRANSACTION_USER_DEPOSIT,
                                        requested_amount: bankLedger.amount,
                                        account_id: account.id,
                                    },
                                    audit_fields: {
                                        transaction_date: now,
                                    },
                                    is_settlement: false,
                                },
                                { transaction }
                            )

                            console.log('Signature is verified', sign.signature)

                            sign.set({
                                confirmed: true
                            })
                            await sign.save()
                            
                            return updatedBankLedger
                        } catch (err) {
                            console.log('Getting signature details is failed && make it confirmed', sign.signature)
                            console.log(err)

                            sign.set({
                                confirmed: true
                            })
                            await sign.save()

                            return false
                        }
                    })
                )

                const verifiedSignatures = transactionDetails.filter(trx => !!trx)
                console.log(`${verifiedSignatures.length} unconfirmed transactions are verified`)

                return res.json({
                    msg: `${verifiedSignatures.length} unconfirmed transactions are verified`
                })
            })
        } catch (err) {
            console.log(err)

            return res.status(400).json({
                msg: `Failed to verify unconfirmed signatures - ${err.message}`
            })
        }
    },
}