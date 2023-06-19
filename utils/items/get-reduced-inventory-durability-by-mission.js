const Redis = require('ioredis');
const fetchMissionEfficiencyDurability = require('../info/fetch-mission-efficiency-durability');

const redis = new Redis({
  port: process.env.REDIS_PORT, // Redis port
  host: process.env.REDIS_HOST, // Redis host
});

const getReducedInventoryDurabilityByMission = async ({
  inventory,
  mission,
}) => {
  if (inventory.Item.type !== 'Equipment') return 1

  const missionEfficiencyDurabilities = await fetchMissionEfficiencyDurability({ redis })
  const reducingDurability = missionEfficiencyDurabilities.find(effect => effect.tier === mission.tier)?.durability || 0

  return (inventory.item_durability || 0) - reducingDurability * mission.time
}

module.exports = getReducedInventoryDurabilityByMission