const { Tier } = require('../../models/index')

const checkFinalTier = async ({
  tier,
  transaction
}) => {
  if (!tier) return false

  const nextTier = await Tier.findOne({
    where: {
      tier: tier.tier + 1
    }
  }, { transaction })

  return !nextTier
}

module.exports = checkFinalTier