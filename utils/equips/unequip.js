const { Item_Equipped, Inventory } = require('../../models/index');

const unequip = async ({
  missionHistory
}) => {
  if (!missionHistory) {
    return {
      result: false,
      status: 404,
      msg: "No mission history"
    }
  }

  return await Item_Equipped.destroy({
    where: {
      mission_history_id: missionHistory.id,
    }
  })
}

module.exports = unequip;