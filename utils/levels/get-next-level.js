const Redis = require('ioredis');

const { Levels } = require('../../models/index')
const getLevel = require('./get-level')

const redis = new Redis({
  port: process.env.REDIS_PORT, // Redis port
  host: process.env.REDIS_HOST, // Redis host
});

const getNextLevel = async payload => {
  const level = typeof payload === 'object' ? payload.level : payload


  if (level < 0 || level >= 100) {
    return undefined
  }

  const nextLevelNumber = Number(level) + 1
  
  return await getLevel({
    level: nextLevelNumber,
    redis
  })
}

module.exports = getNextLevel