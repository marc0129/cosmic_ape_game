const { Item_Equipped, Inventory } = require('../../models/index');
var moment = require('moment');
const getLevel = require('../levels/get-level');

const getMissionPreviewFromMissionHistory = async ({
  missionHistory,
  transaction,
  redis,
}) => {
  if (!missionHistory) {
    return {
      result: false,
      status: 404,
      msg: "No mission history"
    }
  }
  try {
    const itemEquippeds = missionHistory.equippedItems || await missionHistory.getEquippedItems({ transaction })
    const mission = missionHistory.Mission || await missionHistory.getMission({ transaction })

    let result = {
      ...mission.dataValues,
      time_bonus: 0,
      gold_bonus: 0,
      exp_bonus: 0,
      wood_bonus: 0,
      food_bonus: 0,
      ore_bonus: 0,
      rock_bonus: 0,
      luck_bonus: 0,
    }
    console.log(itemEquippeds)

    await Promise.all(
        itemEquippeds.map(async itemEquipped => {
          if (!!itemEquipped.is_active) {
            if (itemEquipped.type === 'item') {
              const item = itemEquipped.Item || await itemEquipped.getItem()
              if (!item) return;
  
              switch (item.category) {
                case 'speed':
                  result['time_bonus'] += (item.effect_bonus || 0)
                  break
                case 'perception':
                  result['gold_bonus'] += (item.effect_bonus || 0)
                  break
                case 'sight':
                  result['exp_bonus'] += (item.effect_bonus || 0)
                  break
                case 'str-crushing':
                  result['rock_bonus'] += (item.effect_bonus || 0)
                  break
                case 'str-piercing':
                  result['ore_bonus'] += (item.effect_bonus || 0)
                  break
                case 'str-cutting':
                  result['wood_bonus'] += (item.effect_bonus || 0)
                  break
                case 'agility':
                  result['food_bonus'] += (item.effect_bonus || 0)
                  break
                case 'lucky-food':
                  result['luck_bonus'] += (item.effect_bonus || 0)
                  break
                default:
                  break
              }
            } else if (itemEquipped.type === 'utility') {
              const item = itemEquipped.Utility || await itemEquipped.getUtility()
              if (!item) return;
              
              result['luck_bonus'] += (item.luck_rate_bonus || 0)
              result['gold_bonus'] += (item.gold_gain_bonus || 0)
            }
          }
        })
    )

    result['remainingMinutes'] = moment(missionHistory['started_at']).add(missionHistory['duration'] || 0, 'hours').diff(moment(), 'minutes') + 1
    return result
  }catch(err){
    console.log(err)
    throw new Error(`Failed to get preview from mission history ${err.message}`)
  }

}

module.exports = getMissionPreviewFromMissionHistory;