'use strict';
const {
  Resource,
  Maps,
  Missions,
  Mission_Resource_Reward,
  Utility,
} = require("../models/index");

module.exports = {
  async up (queryInterface, Sequelize) {
    const resources = await Resource.findAll()
    const utilities = await Utility.findAll()
    const missions = await Missions.findAll({
      where: {
        is_active: true
      },
      include: Maps,
    })
    const now = new Date()

    const missionResourceRewards = await Mission_Resource_Reward.bulkCreate([
      //tier 1
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 1').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 1').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 27,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 3,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 1').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 1').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 27,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 3,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 1').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 65,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 1').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 31,
        lowest_amount: 2,
        highest_amount: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 4,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 1').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 65,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 1').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 31,
        lowest_amount: 2,
        highest_amount: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 4,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Koa Wood').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 5,
        highest_amount: 10,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Prisma Ore').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 5,
        highest_amount: 10,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 1').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 1.5,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.25,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Ganrei Rock').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 5,
        highest_amount: 10,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Rushmooms').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 5,
        highest_amount: 10,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 2').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 1.5,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.25,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Prisma Ore').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 5,
        highest_amount: 10,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Ganrei Rock').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 5,
        highest_amount: 10,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 3').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 1.5,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.25,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Rushmooms').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 5,
        highest_amount: 10,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Koa Wood').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 5,
        highest_amount: 10,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 4').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 1.5,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.25,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Koa Wood').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 3,
        highest_amount: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Prisma Ore').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 3,
        highest_amount: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Ganrei Rock').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 3,
        highest_amount: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Rushmooms').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 3,
        highest_amount: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        reward_id: null,
        reward_type: 'utility',
        reward_description: 'Random Mysterious Legendary Key',
        name: 'Silver',
        luck: 3,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.45,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      //tier 2
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 1').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 27,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 3,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 1').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 27,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 3,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 1').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 65,
        lowest_amount: 2,
        highest_amount: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 31,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 4,
        lowest_amount: 2,
        highest_amount: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 1').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 65,
        lowest_amount: 2,
        highest_amount: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 31,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 4,
        lowest_amount: 2,
        highest_amount: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Koa Wood').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 8,
        highest_amount: 15,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Prisma Ore').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 8,
        highest_amount: 15,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 1').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 2,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.5,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Ganrei Rock').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 8,
        highest_amount: 15,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Rushmooms').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 8,
        highest_amount: 15,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 2').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 2,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.5,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Prisma Ore').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 8,
        highest_amount: 15,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Ganrei Rock').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 8,
        highest_amount: 15,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 3').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 2,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.5,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Rushmooms').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 8,
        highest_amount: 15,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Koa Wood').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 8,
        highest_amount: 15,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 4').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 2,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.5,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Koa Wood').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 4,
        highest_amount: 8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Prisma Ore').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 4,
        highest_amount: 8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Ganrei Rock').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 4,
        highest_amount: 8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Rushmooms').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 4,
        highest_amount: 8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        reward_id: null,
        reward_type: 'utility',
        reward_description: 'Random Mysterious Legendary Key',
        name: 'Silver',
        luck: 3.5,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.9,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      //tier 3
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 27,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 3,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 27,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 3,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 65,
        lowest_amount: 2,
        highest_amount: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 31,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 4,
        lowest_amount: 2,
        highest_amount: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 65,
        lowest_amount: 2,
        highest_amount: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 31,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 4,
        lowest_amount: 2,
        highest_amount: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Koa Wood').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 12,
        highest_amount: 22,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Prisma Ore').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 12,
        highest_amount: 22,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 1').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 2.5,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.75,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Ganrei Rock').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 12,
        highest_amount: 22,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Rushmooms').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 12,
        highest_amount: 22,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 2').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 2.5,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.75,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Prisma Ore').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 12,
        highest_amount: 22,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Ganrei Rock').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 12,
        highest_amount: 22,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 3').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 2.5,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.75,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Rushmooms').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 12,
        highest_amount: 22,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Koa Wood').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 12,
        highest_amount: 22,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 4').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 2.5,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.75,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Koa Wood').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 6,
        highest_amount: 12,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Prisma Ore').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 6,
        highest_amount: 12,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Ganrei Rock').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 6,
        highest_amount: 12,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Rushmooms').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 6,
        highest_amount: 12,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        reward_id: null,
        reward_type: 'utility',
        reward_description: 'Random Mysterious Legendary Key',
        name: 'Silver',
        luck: 4,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.35,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      //tier 4
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 27,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 3,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 27,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 3,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 65,
        lowest_amount: 2,
        highest_amount: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 31,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 4,
        lowest_amount: 2,
        highest_amount: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 65,
        lowest_amount: 2,
        highest_amount: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 31,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 4,
        lowest_amount: 2,
        highest_amount: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Koa Wood').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 18,
        highest_amount: 30,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Prisma Ore').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 18,
        highest_amount: 30,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 1').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 3,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Ganrei Rock').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 18,
        highest_amount: 30,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Rushmooms').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 18,
        highest_amount: 30,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 2').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 3,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Prisma Ore').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 18,
        highest_amount: 30,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Ganrei Rock').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 18,
        highest_amount: 30,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 3').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 3,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Rushmooms').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 18,
        highest_amount: 30,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Koa Wood').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 18,
        highest_amount: 30,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 4').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 3,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Koa Wood').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 9,
        highest_amount: 18,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Prisma Ore').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 9,
        highest_amount: 18,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Ganrei Rock').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 9,
        highest_amount: 18,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Rushmooms').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 9,
        highest_amount: 18,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        reward_id: null,
        reward_type: 'utility',
        reward_description: 'Random Mysterious Legendary Key',
        name: 'Silver',
        luck: 5,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.8,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      //tier 5
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 27,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 3,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 27,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 3,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 65,
        lowest_amount: 2,
        highest_amount: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 31,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 4,
        lowest_amount: 2,
        highest_amount: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 65,
        lowest_amount: 2,
        highest_amount: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 31,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 4,
        lowest_amount: 2,
        highest_amount: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Koa Wood').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 25,
        highest_amount: 40,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Prisma Ore').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 25,
        highest_amount: 40,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 1').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 3.5,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.25,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Ganrei Rock').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 25,
        highest_amount: 40,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Rushmooms').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 25,
        highest_amount: 40,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 2').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 3.5,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.25,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Prisma Ore').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 25,
        highest_amount: 40,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Ganrei Rock').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 25,
        highest_amount: 40,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 3').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 3.5,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.25,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Rushmooms').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 25,
        highest_amount: 40,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Koa Wood').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 25,
        highest_amount: 40,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 4').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 3.5,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.25,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Koa Wood').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 14,
        highest_amount: 24,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Prisma Ore').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 14,
        highest_amount: 24,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Ganrei Rock').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 14,
        highest_amount: 24,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Rushmooms').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 14,
        highest_amount: 24,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        reward_id: null,
        reward_type: 'utility',
        reward_description: 'Random Mysterious Legendary Key',
        name: 'Silver',
        luck: 6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 2.25,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      //tier 6
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 27,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 3,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 27,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 3,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 65,
        lowest_amount: 2,
        highest_amount: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 31,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 4,
        lowest_amount: 2,
        highest_amount: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 65,
        lowest_amount: 2,
        highest_amount: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 31,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 4,
        lowest_amount: 2,
        highest_amount: 5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Koa Wood').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 35,
        highest_amount: 55,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Prisma Ore').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 35,
        highest_amount: 55,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 1').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 4,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.5,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Ganrei Rock').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 35,
        highest_amount: 55,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Rushmooms').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 35,
        highest_amount: 55,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 2').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 4,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.5,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Prisma Ore').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 35,
        highest_amount: 55,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Ganrei Rock').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 35,
        highest_amount: 55,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 3').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 4,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.5,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Rushmooms').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 35,
        highest_amount: 55,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Koa Wood').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 35,
        highest_amount: 55,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        reward_id: utilities.find(utility => utility.name === 'Mysterious Key 4').id,
        reward_type: 'utility',
        reward_description: null,
        name: 'Silver',
        luck: 4,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.5,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Koa Wood').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 20,
        highest_amount: 32,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Prisma Ore').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 20,
        highest_amount: 32,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Ganrei Rock').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 20,
        highest_amount: 32,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Rushmooms').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 100,
        lowest_amount: 20,
        highest_amount: 32,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        reward_id: null,
        reward_type: 'utility',
        reward_description: 'Random Mysterious Legendary Key',
        name: 'Silver',
        luck: 7,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 2.7,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
