const Redis = require('ioredis');
const fetchLevels = require('../info/fetch-levels')

const redis = new Redis({
  port: process.env.REDIS_PORT, // Redis port
  host: process.env.REDIS_HOST, // Redis host
});

const getLevel = async (payload, tier) => {
  const level = typeof payload === 'object' ? payload.level : payload
  const currentTier = typeof payload === 'object' ? (tier || payload.tier) : tier


  if (level < 0 || level > 100) {
    return undefined
  }

  const levelFromCache = !!redis && await redis.get(`Level_${level}`)

  if (!!levelFromCache) {

    return JSON.parse(levelFromCache)
  }

  let levels = !!redis && await redis.get(`Levels`)
  if (!!levels) {
    levels = JSON.parse(levels)

    const levelInfo = levels.find(levelInfo => levelInfo.level === level)


    return levelInfo
  }

  levels = await fetchLevels({
    redis,
  })
  const levelInfo = levels.find(levelInfo => (levelInfo.level === level && (levelInfo.tier === currentTier || !currentTier)))

  if (!!redis) {

    redis.set(`Level_${level}`, JSON.stringify(levelInfo))
  }


  return levelInfo
}

module.exports = getLevel