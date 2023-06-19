const axios = require('axios')
const csvtojson = require('csvtojson')
const missionFile = require('../../assets/info/mission-success.csv')

const fetchMissionSuccesses = async ({
  redis
} = {}) => {
  try {
    console.log(`Getting All Mission Success`)

    if (!!redis) {
      let missionSuccesss = await redis.get(`Mission_Success`)
      if (!!missionSuccesss) {
        const missionSuccessJson = JSON.parse(missionSuccesss)
        console.log(`Got All Mission Success From Cache`)
        return missionSuccessJson
      }
    }

    // const missionsCSV = await axios.get(`${process.env.STATIC_CSVS_ENDPOINT}/mission-success.csv`)
    
    // const missionSuccessJson = await csvtojson().fromString(missionsCSV.data)

    const missionSuccessJson = await csvtojson().fromString(missionFile)

    console.log(`Got All Mission Success From CSV - ${missionSuccessJson}`)

    const missionSuccesss = missionSuccessJson.map(row => ({
      mission_tier: Number(row['Mission Tier']),
      tier1: Number(row['Character Tier 1']),
      tier2: Number(row['Character Tier 2']),
      tier3: Number(row['Character Tier 3']),
      tier4: Number(row['Character Tier 4']),
      tier5: Number(row['Character Tier 5']),
      tier6: Number(row['Character Tier 6']),
    }))

    console.log(`Parsed All Mission Success from CSV - ${missionSuccesss}`)

    if (!!redis) {
      console.log(`Setting All Mission Success to cache - ${missionSuccesss}`)
      redis.set(`Mission_Success`, JSON.stringify(missionSuccesss), "EX", 600)
    }

    return missionSuccesss
  } catch (err) {
    console.log(err)

    console.log('Retrieving empty mission Success info from error')
    return []
  }
}

module.exports = fetchMissionSuccesses