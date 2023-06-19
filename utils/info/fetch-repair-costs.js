const axios = require('axios')
const csvtojson = require('csvtojson')
const repairCostFile = require('../../assets/info/legendary-item-repair.csv')

const fetchRepairCosts = async ({
  redis
} = {}) => {
  try {
    console.log(`Getting Repair Costs`)

    if (!!redis) {
      let repairCosts = await redis.get(`Repair Costs`)
      if (!!repairCosts) {
        const repairCostsJson = JSON.parse(repairCosts)
        console.log(`Got Repair Costs From Cache`)
        return repairCostsJson
      }
    }

    // const repairCostsCsv = await axios.get(`${process.env.STATIC_CSVS_ENDPOINT}/legendary-item-repair.csv`)
    
    // const repairCostsJson = await csvtojson().fromString(repairCostsCsv.data)

    const repairCostsJson = await csvtojson().fromString(repairCostFile)

    console.log(`Got Repair Costs From CSV - ${repairCostsJson}`)

    const repairCosts = repairCostsJson.map(row => ({
      tier: Number(row['Item Tier']),
      cosmic: Number(row['Cosmic']),
      gold: Number(row['Gold']),
    }))

    console.log(`Parsed Repair Costs from CSV - ${repairCosts}`)

    if (!!redis) {
      console.log(`Setting all repairCosts to cache - ${repairCosts}`)
      redis.set(`Repair Costs`, JSON.stringify(repairCosts), "EX", 600)
    }

    return repairCosts
  } catch (err) {
    console.log(err)

    console.log('Retrieving empty repair costs info from error')
    return []
  }
}

module.exports = fetchRepairCosts