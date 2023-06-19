const getLevel = require("../levels/get-level")

const checkEquip = async ({
  ape,
  mission,
  inventories = []
}) => {
  if (!ape || !mission) {
    return {
      result: false,
      status: 404,
      msg: "No ape or no mission",
      title: "Not Found"
    }
  }
  const apeLevel = await getLevel({ level: ape.level })
  if (!apeLevel) {
    return {
      result: false,
      msg: "Invalid Ape",
      title: "Invalid"
    }
  }
  
  //check max equip count
  const maxInventoryCount = 3
  if (maxInventoryCount < inventories.length) {
    return {
      result: false,
      title: "Inventory Full",
      msg: "Upgrade ape to increase inventory or move items to base inventory"
    }
  }

  //only one inventory for same type
  let isAlreadyAdded = {}

  //check durability
  const checkResult = await Promise.all(
    inventories.map(async inventory => {
      if (inventory.item_durability <= 0) {
        return {
          result: false,
          msg: "All inventories' remaining durability should be greater than 0",
          title: "Invalid Inventory Durability"
        }
      }
      const item = await inventory.getItem()
      if (!item) {
        return {
          result: false,
          msg: "Invalid inventory cannot be equipped",
          title: "Invalid Inventory"
        }
      }

      const itemCategory = item.category
      if (isAlreadyAdded[itemCategory]) {
        return {
          result: false,
          msg: "There cannot be existed same type inventories",
          title: "Same Type Inventory"
        }
      }

      isAlreadyAdded[itemCategory] = true
    })
  )
  const result = checkResult.filter(result => !!result)[0]
  if (!!result) return result

  return {
    result: true,
    msg: "These inventories can be equipped for this ape",
    title: "Success"
  }
}

module.exports = checkEquip;