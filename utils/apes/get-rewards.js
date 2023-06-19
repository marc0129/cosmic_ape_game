const { Resource, Resource_Inventory, Utility, Utility_Inventory } = require('../../models/index');
const { Op } = require("sequelize");
const { LOOTBOX_ALL } = require('../../static/lootbox-types');
const getValueBetweenLowestAndHighest = require('../statics/get-value-between-lowest-and-highest');

const getRewards = async ({
  ape,
  missionEffect,
  transaction
}) => {
  if (!ape || !missionEffect) return 'No Ape or no mission effect'

  console.log('Rewarding Resources && Utilities')

  const availableLootboxes = LOOTBOX_ALL.map(
    lootbox => (missionEffect.Mission_Resource_Rewards || []).filter(reward => reward.name === lootbox)
  )
  const rewardingLootboxes = availableLootboxes.filter(
    lootbox => {
      if (lootbox.length === 0) return false

      const luck = (lootbox[0].luck || 0) * (100.0 + missionEffect.luck_bonus) / 100
      const isRewarding = (Math.random() * 100) <= luck
      return isRewarding
    }
  )
  const rewardings = rewardingLootboxes.flat()
  console.log('Rewarding Resources ....', rewardings)
  try {
    const rewards = await Promise.all(
      rewardings.map(
        async reward => {
          if (reward.reward_type === 'resource') {
            const resource = reward.Resource
            if (!resource) return null

            let amount = Math.floor(getValueBetweenLowestAndHighest(reward.lowest_amount, reward.highest_amount))
            const luck = (
              resource.name === 'Koa Wood'
              ? missionEffect.wood_bonus
              : resource.name === 'Prisma Ore'
              ? missionEffect.ore_bonus
              : resource.name === 'Ganrei Rock'
              ? missionEffect.rock_bonus
              : resource.name === 'Rushmooms'
              ? missionEffect.food_bonus
              : 0
            )
            amount *= ((100.0 + luck) / 100)
            
            let resourceInventory
            if (!!resource.stack) {
              resourceInventory = await Resource_Inventory.findOne({
                where: {
                  ape_id: ape.id,
                  resource_id: resource.id,
                }
              }, { transaction })
            }
            if (!resourceInventory) {
              resourceInventory = await Resource_Inventory.create({
                ape_id: ape.id,
                resource_id: resource.id,
                resource_quantity: 0
              }, { transaction })
            }

            resourceInventory.set({
              resource_quantity: resourceInventory.resource_quantity + amount
            })
            resourceInventory = await resourceInventory.save({ transaction })

            return {
              ...resourceInventory.dataValues,
              Resource: resource,
              amount,
            }
          } else if (reward.reward_type === 'utility') {
            let utility = reward.Utility
            
            if (reward.reward_description === 'Random Mysterious Legendary Key') {
              let key = Math.ceil(Math.random() * 4)
              if (key < 1) key = 1

              utility = await Utility.findOne({
                where: {
                  key,
                  category: 'Mysterious'
                }
              }, { transaction })
            }

            if (!utility) {
              return null
            }

            const amount = Math.floor(getValueBetweenLowestAndHighest(reward.lowest_amount, reward.highest_amount))
            
            let utilityInventory
            if (!!utility.stack) {
              utilityInventory = await Utility_Inventory.findOne({
                where: {
                  ape_id: ape.id,
                  utility_id: utility.id,
                }
              }, { transaction })
            }
            if (!utilityInventory) {
              utilityInventory = await Utility_Inventory.create({
                ape_id: ape.id,
                utility_id: utility.id,
                utility_quantity: 0,
                utility_durability: 0,
              }, { transaction })
            }

            utilityInventory.set({
              utility_quantity: utilityInventory.utility_quantity + amount,
              utility_durability: utility.durability || null,
            })
            utilityInventory = await utilityInventory.save({ transaction })

            return {
              ...utilityInventory.dataValues,
              Utility: utility,
              amount,
            }
          } else {
            return null
          }
        }
      )
    )
    console.log(`Resources && Utilities rewarded to ape(${ape.id})`, rewards)

    return rewards
  } catch(err){
    console.log(err)
    throw new Error(`Failed to reward resources && utilities for ${ape.id}`);
  }
}

module.exports = getRewards;