const { createToken } = require('../../utils/shop/tokenHelper')
const httpStatus = require('http-status')
const { ShopItem, Resource, Utility, Currency } = require('../../models/index')
const Redis = require("ioredis");
const redis = new Redis({
    port: process.env.REDIS_PORT, // Redis port
    host: process.env.REDIS_HOST, // Redis host
});

async function generateToken(req, res) {
  try {
    const data = req.body

    if (!data.address) {
      return res.status(httpStatus.BAD_REQUEST).json({
        success: 'false',
        message: 'Account is not given.',
      })
    }

    const accessToken = await createToken(data.address)

    return res.status(httpStatus.OK).json({
      success: true,
      accessToken: accessToken,
    })
  } catch (err) {
    console.log(err)
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: 'false',
      message: 'Internal Server Error',
    })
  }
}

async function getAll(req, res) {
  let searchTerm = 'shopItems'
  let shopItems

  try {
    console.log('Getting resources from cache')
    shopItems = await redis.get(searchTerm)

    if (!!shopItems) {
      return res.json(JSON.parse(shopItems))
    }
  } catch (err) {
    console.log(`Failed to get shopItems from cache - ${err}`)
  }

  try {
    console.log('Getting resources from DB')

    shopItems = await ShopItem.findAll({
      include: [
        {
          model: Resource,
        },
        {
          model: Utility,
        },
        {
          model: Currency,
        }
      ],
    })

    console.log(`Got shop items from DB && set to Cache `)
    redis.set(searchTerm, JSON.stringify(shopItems))

    return res.json(shopItems)
  } catch (err) {
    console.log(`Failed to get shop items ${err}`)

    return res.status(500).json({
      msg: 'Something went wrong.',
    })
  }
}

module.exports = {
  generateToken,
  getAll,
}
