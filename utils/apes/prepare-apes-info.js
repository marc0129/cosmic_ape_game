const getLevel = require("../levels/get-level");
const getNextLevel = require("../levels/get-next-level");
const getMissionPreviewFromMissionHistory = require("../mission/get-mission-preview-from-mission-history");
const getNextTier = require("../tier/get-next-tier");

const prepareApesInfo = async ({
  apes,
  redis,
  transaction
}) => {  
  const preparedApes = await Promise.all(
    apes.map(async ape => {
      const data = {
        ...((!!ape && (ape.dataValues || ape)) || {}),
        Level: (!!ape && await getLevel({ level: ape.level, redis, transaction})),
        nextLevel: (!!ape && await getNextLevel({ level: ape.level, redis, transaction})),
        nextTier: (!!ape && await getNextTier({ tier: ape.tier, redis, transaction})),
        activeMissionEffect: (
          !!ape && !!ape.active_mission && await getMissionPreviewFromMissionHistory({
            missionHistory: ape.active_mission,
            transaction,
            redis,
          })) || {},
      }

      if (!!redis) redis.set(`Ape_${ape.address}`, JSON.stringify(data))

      return data
    })
  )

  return preparedApes
}

module.exports = prepareApesInfo;