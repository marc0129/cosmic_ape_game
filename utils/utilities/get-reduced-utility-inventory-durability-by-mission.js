const Redis = require('ioredis');
const fetchMissionEfficiencyDurability = require('../info/fetch-mission-efficiency-durability');

const redis = new Redis({
  port: process.env.REDIS_PORT, // Redis port
  host: process.env.REDIS_HOST, // Redis host
});

const getReducedUtilityInventoryDurabilityByMission = async ({
  inventory,
  mission,
}) => {
  if (inventory.Utility.category === 'Mysterious') return -1

  const missionEfficiencyDurabilities = await fetchMissionEfficiencyDurability({ redis })
  const reducingDurability = missionEfficiencyDurabilities.find(effect => effect.tier === mission.tier)?.durability || 0

  return (inventory.utility_durability || 0) - reducingDurability * mission.time
}

module.exports = getReducedUtilityInventoryDurabilityByMission