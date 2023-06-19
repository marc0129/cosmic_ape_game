const { Item_Equipped, Inventory } = require('../../models/index');

const equip = async ({
  ape,
  mission,
  missionHistory,
  inventories = []
}) => {
  if (!ape || !mission || !missionHistory) {
    return {
      result: false,
      status: 404,
      msg: "No ape or no mission or no mission history"
    }
  }

  await Promise.all(
    inventories.map(async inventory => {
      //reduce inventory durability
      inventory.set({
        item_durability: inventory.item_durability - 1
      })
      await inventory.save()
      const item = await inventory.getItem()

      //create item_equipped
      await Item_Equipped.create({
        mission_history_id: missionHistory.id,
        item_id: item.id,
        is_active: Math.random() * 100 <= item.activation_chance
      })
    })
  )

  return await Item_Equipped.findAll({
    where: {
      mission_history_id: missionHistory.id,
    }
  })
}

module.exports = equip;