
const { Account, sequelize } = require('../../models/index');
const Redis = require("ioredis");
const getCurrenciesByAccounts = require('../../utils/currencies/get-currencies-by-accounts');
const getLevel = require('../../utils/levels/get-level');
const redis = new Redis({
    port: process.env.REDIS_PORT, // Redis port
    host: process.env.REDIS_HOST, // Redis host

});

module.exports = {
    async getInfo(req, res) {
        const {
            address,
        } = req.query

        if (!address) {
            return res.status(400).json({
                msg: 'Address is required'
            })
        }

        const searchTerm= `Account_${address}`

        try {
            console.log(`Getting account from cache - Address(${address})`)
            const account = await redis.get(searchTerm)

            if (!!account) {
                console.log(`Account retrieved from cache - ${account}`)
                return res.json(JSON.parse(account))
            }
        } catch (err) {
            console.log(`Failed to get account from cache - ${err}`)
        }

        try {
            console.log(`Getting account from DB - Address(${address})`)

            sequelize.transaction(async transaction => {
                let account = await Account.findOne({
                    where: {
                        address,
                    }
                }, { transaction })

                if (!account) {
                    console.log(`This address is unavailable - Address(${address})`)
                    console.log(`Creating a new account for this address - Address(${address})`)
                    
                    account = await Account.create({
                        address,
                        experience: 0,
                    }, { transaction })
                    console.log(`Created a new account for this address - Address(${address})`)
                }

                console.log(`Got account from DB - ${account}`)

                const accountApes = await account.getApes({ transaction })

                const maxApeStaminas = await Promise.all((accountApes || []).map(async ape => {
                    const level = await getLevel(ape)
                    const apeStamina = level?.stamina || 0
        
                    return apeStamina
                }))
                const maxStamina = maxApeStaminas.reduce((a, b) => a + b, (account.stamina || 0))
                
                const accountWithCurrencies = ({
                    ...account.dataValues,
                    currencies: await getCurrenciesByAccounts({
                        accounts: [account],
                        transaction,
                    }),
                    maxStamina
                })
                console.log(`Setting account with currencies to Cache - ${accountWithCurrencies}`)
                redis.set(searchTerm, JSON.stringify(accountWithCurrencies), "EX", 600);

                return res.json({
                    account: accountWithCurrencies
                })
            })
        } catch (err) {
            console.log(`Failed to get an account ${err}`)
            
            return res.status(500).json({
                msg: "Something went wrong."
            })
        }

    },
}