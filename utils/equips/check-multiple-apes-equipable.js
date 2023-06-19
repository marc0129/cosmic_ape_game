const {
  MAX_INVENTORY_SLOT, MAX_UTILITY_SLOT
} = require('../consts')
const getReducedInventoryDurabilityByMission = require('../items/get-reduced-inventory-durability-by-mission')
const getLevel = require('../levels/get-level')
const getReducedUtilityInventoryDurabilityByMission = require('../utilities/get-reduced-utility-inventory-durability-by-mission')
const checkMultipleApesEquipable = async ({
  apes,
  apesInfo,
  mission,
}) => {
  if (!apes || !apesInfo) {
    return {
      result: false,
      msg: 'No Ape or No info'
    }
  }

  const results = await Promise.all(
    apes.map(async ape => {
      const apeLevel = await getLevel({ level: ape.level })
      if (!apeLevel) {
        return {
          result: false,
          msg: `No level for the ape(${ape.name} - ${ape.address})`
        }
      }

      const info = apesInfo.find(apeInfo => apeInfo.address === ape.address)
      if (!info) {
        return {
          result: false,
          msg: `No info for the ape(${ape.name} - ${ape.address})`
        }
      }

      const inventoryIds = info.inventoryIds || []
      if (inventoryIds.length > MAX_INVENTORY_SLOT) {
        return {
          result: false,
          msg: `Cant be equipped more than ${MAX_INVENTORY_SLOT} items for the ape(${ape.name} - ${ape.address})`
        }
      }

      const inventories = (ape.Inventories || []).filter(inv => inventoryIds.includes(inv.id))
      if (inventories.length !== inventoryIds.length) {
        return {
          result: false,
          msg: `Cant be equipped these items for the ape(${ape.name} - ${ape.address})`
        }
      }

      const utilityInventoryIds = info.utilityInventoryIds || []
      if (utilityInventoryIds.length > MAX_UTILITY_SLOT) {
        return {
          result: false,
          msg: `Cant be equipped more than ${MAX_UTILITY_SLOT} items for the ape(${ape.name} - ${ape.address})`
        }
      }

      const utilityInventories = (ape.Utility_Inventories || []).filter(inv => utilityInventoryIds.includes(inv.id))
      if (utilityInventories.length !== utilityInventoryIds.length) {
        return {
          result: false,
          msg: `Cant be equipped these items for the ape(${ape.name} - ${ape.address})`
        }
      }

      if (mission.secondary_branch === 'Legendary' && !utilityInventories.map(inv => inv.Utility.key).includes(mission.key)) {
        return {
          result: false,
          msg: `This mission cannot be played since Key ${mission.key} is not equipped for the ape(${ape.name} - ${ape.address})`
        }
      }

      let invAble = true, isCategoryAdded = {}, isDurability = false

      await Promise.all(inventories.map(async inv => {
        const item = inv.Item
        if (!item) {
          invAble = false
          return
        }

        const reducedDurability = await getReducedInventoryDurabilityByMission({ inventory: inv, mission })
        // if (reducedDurability < 0) {
        //   invAble = false
        //   isDurability = true
        //   return
        // }

        if (!!isCategoryAdded[item.category]) {
          invAble = false
          return
        }

        isCategoryAdded[item.category] = true
      }))

      await Promise.all(utilityInventories.map(async inv => {
        const utility = inv.Utility
        if (!utility) {
          invAble = false
          return
        }

        const reducedDurability = await getReducedUtilityInventoryDurabilityByMission({ inventory: inv, mission })
        // if (reducedDurability < 0) {
        //   invAble = false
        //   isDurability = true
        //   return
        // }
      }))

      if (isDurability && !invAble) {
        return {
          result: false,
          msg: `Cant be equipped these items for the ape(${ape.name} - ${ape.address}) due to the not enough item or utility durability`
        }
      }
      if (!invAble) {
        return {
          result: false,
          msg: `Cant be equipped these items or utilities for the ape(${ape.name} - ${ape.address})`
        }
      }

      return {
        result: true
      }
    })
  )
  if (results.filter(res => !res.result).length > 0) {
    return {
      result: false,
      info: results,
    }
  }

  return {
    result: true,
  }
}

module.exports = checkMultipleApesEquipable