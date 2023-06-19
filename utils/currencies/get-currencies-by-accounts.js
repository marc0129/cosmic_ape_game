const { Op } = require('sequelize');
const { 
  Account_Transaction,
  Currency,
  sequelize,
} = require('../../models/index');

const getCurrenciesByAccounts = async ({
  accounts,
  transaction
}) => {
  const accountIds = accounts.map(account => account.id)

  console.log(`Getting currencies for accounts from DB - ${accountIds}`)
  const currencies = await Account_Transaction.findAll({
    where: {
      account_id: {
        [Op.in]: accountIds
      }
    },
    attributes: ['account_id', 'currency_id', [sequelize.fn('SUM', sequelize.col('amount')), 'amount']],
    group : ['account_id', 'currency_id'],
    include: Currency,
    transaction
  })
  console.log(`Got currencies from DB - ${currencies}`)

  return currencies
}

module.exports = getCurrenciesByAccounts;