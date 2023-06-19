const axios = require('axios')
const csvtojson = require('csvtojson')
const missionFile = require('../../assets/info/mission-duration.csv')

const fetchMissionDurations = async ({
  redis
} = {}) => {
  try {
    console.log(`Getting All Mission Duration`)

    if (!!redis) {
      let missionDurations = await redis.get(`Mission_Duration`)
      if (!!missionDurations) {
        const missionDurationJson = JSON.parse(missionDurations)
        console.log(`Got All Mission Duration From Cache`)
        return missionDurationJson
      }
    }

    // const missionsCSV = await axios.get(`${process.env.STATIC_CSVS_ENDPOINT}/mission-duration.csv`)
    
    // const missionDurationJson = await csvtojson().fromString(missionsCSV.data)

    const missionDurationJson = await csvtojson().fromString(missionFile)

    console.log(`Got All Mission Duration From CSV - ${missionDurationJson}`)

    const missionDurations = missionDurationJson.map(row => ({
      mission_tier: Number(row['Mission Tier']),
      tier1: Number(row['Character Tier 1']),
      tier2: Number(row['Character Tier 2']),
      tier3: Number(row['Character Tier 3']),
      tier4: Number(row['Character Tier 4']),
      tier5: Number(row['Character Tier 5']),
      tier6: Number(row['Character Tier 6']),
    }))

    console.log(`Parsed All Mission Duration from CSV - ${missionDurations}`)

    if (!!redis) {
      console.log(`Setting All Mission Duration to cache - ${missionDurations}`)
      redis.set(`Mission_Duration`, JSON.stringify(missionDurations), "EX", 600)
    }

    return missionDurations
  } catch (err) {
    console.log(err)

    console.log('Retrieving empty mission Duration info from error')
    return []
  }
}

module.exports = fetchMissionDurations