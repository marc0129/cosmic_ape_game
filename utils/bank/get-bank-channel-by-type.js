const { 
  Bank_Channel
} = require('../../models/index');

const Redis = require("ioredis");

const redis = new Redis({
  port: process.env.REDIS_PORT, // Redis port
  host: process.env.REDIS_HOST, // Redis host
});

const getBankChannelByType = async ({
  type,
  transaction
}) => {
  let channel = await redis.get(type)

  if (!!channel) {
    channel = JSON.parse(channel)
  } else {
    channel = await Bank_Channel.findOne({
      name: type
    }, { transaction })

    redis.set(type, JSON.stringify(channel), "EX", 600)
  }

  return channel
}

module.exports = getBankChannelByType;