const axios = require('axios')
const csvtojson = require('csvtojson')
const efficiencyEffectFile = require('../../assets/info/efficiency-effect.csv')

const fetchEfficiencyEffects = async ({
  redis
} = {}) => {
  try {
    console.log(`Getting All Efficiency Effects`)

    if (!!redis) {
      let efficiencyEffects = await redis.get(`Efficiency Effects`)
      if (!!efficiencyEffects) {
        const efficiencyEffectJson = JSON.parse(efficiencyEffects)
        console.log(`Got All Efficiency Effects From Cache`)
        return efficiencyEffectJson
      }
    }

    // const efficiencyEffectCsv = await axios.get(`${process.env.STATIC_CSVS_ENDPOINT}/efficiency-effect.csv`)
    
    // const efficiencyEffectJson = await csvtojson().fromString(efficiencyEffectCsv.data)

    const efficiencyEffectJson = await csvtojson().fromString(efficiencyEffectFile)

    console.log(`Got All Efficiency Effects From CSV - ${efficiencyEffectJson}`)

    const efficiencyEffects = efficiencyEffectJson.map(row => ({
      efficiency: Number(row['Efficiency'].slice(0, -1)),
      effect: Number(row['Effect'].slice(0, -1)),
    }))

    console.log(`Parsed All Efficiency Effects from CSV - ${efficiencyEffects}`)

    if (!!redis) {
      console.log(`Setting all efficiencyEffects to cache - ${efficiencyEffects}`)
      redis.set(`Efficiency Effects`, JSON.stringify(efficiencyEffects), "EX", 600)
    }

    return efficiencyEffects
  } catch (err) {
    console.log(err)

    console.log('Retrieving empty efficiency effect info from error')
    return []
  }
}

module.exports = fetchEfficiencyEffects