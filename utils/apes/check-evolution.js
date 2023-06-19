const getCurrenciesByAccounts = require('../currencies/get-currencies-by-accounts');
const checkFinalTier = require('../tier/check-final-tier');
const tierRecipes = require('../../assets/info/tier-recipes.json');

const checkEvolution = async ({
  ape,
  account,
  transaction,
}) => {
  if (!ape) return 'No Ape'
  const tier = ape.Tier || await ape.getTier({ transaction })

  if (ape.level !== tier.max_level) {
    return 'This ape is not reached to max level for current tier'
  }

  if (await checkFinalTier({ tier, transaction })) {
    return 'This ape is already reached to max tier'
  }

  const tierRecipe = (tierRecipes || []).find(recipe => recipe.tier === ((ape.tier || 0) + 1))
  if (!tierRecipe) {
    return false
  }

  const accountCurrencies = await getCurrenciesByAccounts({ accounts: [ account ], transaction })
  
  const checkResults = tierRecipe.materials.map(material => {
    if (material.type === 'Currency') {
      const currency = accountCurrencies.find(currency => currency.Currency.name === material.name)
      console.log(`Evolution Required: ${material.name} - ${material.amount} / ${currency?.amount || 0}`)

      return (currency?.amount || 0) >= material.amount
    } else if (material.type === 'Resource') {
      const resourceInventory = (ape?.Resource_Inventories || []).find(inv => inv.Resource?.name === material.name)
      console.log(`Evolution Required: ${material.name} - ${material.amount} / ${resourceInventory?.resource_quantity || 0}`)

      return (resourceInventory?.resource_quantity || 0) >= material.amount
    } else {
      return true
    }
  })
  console.log(checkResults)

  if (checkResults.filter(res => !res).length > 0) {
    return 'Not enough materials to evolute for this ape'
  }

  return true
}

module.exports = checkEvolution;