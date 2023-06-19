const { Tier } = require('../../models/index')

const getNextTier = async ({
  tier,
  redis,
  transaction
}) => {


  if (tier < 1 || tier >= 6) {
    return undefined
  }

  const nextTierNumber = Number(tier) + 1
  const nextTierFromCache = !!redis && await redis.get(`Tier_${nextTierNumber}`)

  if (!!nextTierFromCache) {
    return JSON.parse(nextTierFromCache)
  }

  const nextTier = await Tier.findOne({
    where: {
      tier: nextTierNumber
    }
  }, { transaction });

  if (!!redis) redis.set(`Tier_${nextTierNumber}`, JSON.stringify(nextTier), "EX", 600)

  console.log(`Got Next Tier - Tier(${tier}) - (${nextTier})`)
  return nextTier
}

module.exports = getNextTier