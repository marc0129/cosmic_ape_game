const Redis = require('ioredis');
const fetchEfficiencyEffects = require('../info/fetch-efficiency-effect');

const redis = new Redis({
  port: process.env.REDIS_PORT, // Redis port
  host: process.env.REDIS_HOST, // Redis host
});

const getEffectForInventory = async inventory => {
  if (inventory.Item.type === 'Equipment') return 1.0

  const efficiencyEffects = await fetchEfficiencyEffects({ redis })
  console.log('getting effect')
  console.log(inventory.efficiency)
  console.log(inventory.Item.efficiency)
  const efficiencyPercent = Math.round(Math.min((inventory.efficiency || 0) / (inventory.Item.efficiency || 1), 1) * 10) * 10
  console.log(efficiencyPercent)
  const effect = efficiencyEffects.find(effect => effect.efficiency === efficiencyPercent)
  console.log(effect)
  return (effect?.effect || 0) / 100
}

module.exports = getEffectForInventory