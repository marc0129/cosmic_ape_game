const { Op } = require('sequelize');
const { 
  Character_Transaction,
  Currency,
  sequelize,
} = require('../../models/index');

const getCurrenciesByCharacters = async ({
  apes,
  transaction
}) => {
  const apeIds = apes.map(ape => ape.id)

  console.log(`Getting currencies for apes from DB`)
  const currencies = await Character_Transaction.findAll({
    where: {
      character_id: {
        [Op.in]: apeIds
      }
    },
    attributes: ['character_id', 'currency_id', [sequelize.fn('SUM', sequelize.col('amount')), 'amount']],
    group : ['character_id', 'currency_id'],
    include: Currency,
    transaction
  })
  console.log(`Got currencies from DB`)

  return currencies
}

module.exports = getCurrenciesByCharacters;