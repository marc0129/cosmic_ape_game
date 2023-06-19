const Redis = require('ioredis');
const fetchMissionEfficiencyDurability = require('../info/fetch-mission-efficiency-durability');

const redis = new Redis({
  port: process.env.REDIS_PORT, // Redis port
  host: process.env.REDIS_HOST, // Redis host
});

const getReducedInventoryEfficiencyByMission = async ({
  inventory,
  mission,
}) => {
  if (inventory.Item.type === 'Equipment') return 0

  const missionEfficiencyEfficiencies = await fetchMissionEfficiencyDurability({ redis })
  const reducingEfficiency = missionEfficiencyEfficiencies.find(effect => effect.tier === mission.tier)?.efficiency || 0

  return Math.max((inventory.efficiency || 0) - reducingEfficiency * mission.time, 0)
}

module.exports = getReducedInventoryEfficiencyByMission