const axios = require('axios')
const { Levels } = require('../../models/index')
const csvtojson = require('csvtojson')
const levelsCsvFile = require('../../assets/info/levels.csv')

const fetchLevels = async ({
  redis
} = {}) => {
  try {
    console.log(`Getting All Levels`)

    if (!!redis) {
      let levels = await redis.get(`Levels`)
      if (!!levels) {
        const levelsJson = JSON.parse(levels)
        console.log(`Got All Levels From Cache`)
        return levelsJson
      }
    }

    // const levelsCsv = await axios.get(`${process.env.STATIC_CSVS_ENDPOINT}/levels.csv`)
    
    // const levelsJson = await csvtojson().fromString(levelsCsv.data)

    const levelsJson = await csvtojson().fromString(levelsCsvFile)

    console.log(`Got All Levels From CSV `)

    const levels = levelsJson.map(level => ({
      tier: Number(level['Tier']),
      level: Number(level['Level']),
      experience: Number(level['EXP']),
      lr_bonus: Number(level['Luck Bonus']),
      inventory: Number(level['Max Inventory Slots']),
      stamina: Number(level['Stamina']),
      stamina_refresh_per_hour: level['Stamina Refresh Per Day'],
    }))

    console.log(`Parsed All Levels from CSV`)

    if (!!redis) {
      console.log(`Setting all levels to cache `)
      redis.set(`Levels`, JSON.stringify(levels))
    }

    return levels
  } catch (err) {
    console.log(err)

    console.log('Retrieving empty level info from error')
    return []
  }
}

module.exports = fetchLevels