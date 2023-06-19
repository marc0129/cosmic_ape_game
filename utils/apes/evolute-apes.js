const { Account_Transaction, Currency, Resource_Inventory } = require('../../models/index');
const tierRecipes = require('../../assets/info/tier-recipes.json');
const { TRANSACTION_TIER_UP } = require('../../static/transaction-types');
const adjustLevelsForApesByExperiences = require('../levels/adjust-levels-for-apes-by-experiences');

const evoluteApe = async ({
  ape,
  account,
  redis,
  transaction
}) => {
  if (!ape) return false;
  const tierRecipe = (tierRecipes || []).find(recipe => recipe.tier === ((ape.tier || 0) + 1))
  const currencies = await Currency.findAll({ transaction })

  const now = new Date()
  //materials
  await Promise.all(tierRecipe.materials.map(async material => {
    if (material.type === 'Currency') {
      const currency = currencies.find(currency => currency.name === material.name)
      const accountTransaction = await Account_Transaction.create(
        {
          account_id: account.id,
          currency_id: currency.id,
          amount: -material.amount,
          transaction_date: now,
          source_of_transaction: {
            type: TRANSACTION_TIER_UP,
            character_id: ape.id,
            account_id: account.id,
            tier: ape.tier,
          },
          audit_fields: {
            transaction_date: now,
            currency_name: currency.name,
            amount: -material.amount,
            tier: ape.tier,
            target_tier: ape.tier + 1
          },
          is_settlement: false,
        },
        { transaction }
      )

      return accountTransaction
    } else if (material.type === 'Resource') {
      const resourceInventory = (ape?.Resource_Inventories || []).find(inv => inv.Resource?.name === material.name)

      const updatedResourceInventory = await Resource_Inventory.update({
        resource_quantity: resourceInventory.resource_quantity - material.amount
      }, {
        where: {
          id: resourceInventory.id
        }
      })

      return updatedResourceInventory
    } else {
      return true
    }
  }))

  //evolute
  ape.set({ tier: ape.tier + 1 })
  await ape.save({ transaction })

  const adjustedApes = await adjustLevelsForApesByExperiences({
    apes: [ape],
    transaction,
    redis,
  })

  return adjustedApes[0]
}

module.exports = evoluteApe;