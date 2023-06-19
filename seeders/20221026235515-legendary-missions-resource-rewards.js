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
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Cosmic Artifact').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 65,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Cosmic Artifact').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 25,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 1
        ).id,
        reward_id: resources.find(resource => resource.name === 'Cosmic Evolution Stones').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 10,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 1').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.4,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 1').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.4,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 1').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.4,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 1').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.4,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 1').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.4,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 1').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.4,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 1').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.4,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 1').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.4,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      
      //tier 2
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Cosmic Artifact').id,
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
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Cosmic Evolution Stones').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 25,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 2
        ).id,
        reward_id: resources.find(resource => resource.name === 'Cosmic Evolution Shards').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 10,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.2,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.8,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.2,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.8,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.2,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.8,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.2,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.8,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.2,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.8,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.2,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.8,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.2,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.8,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 2').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.2,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 0.8,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      
      //tier 3
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Cosmic Artifact').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 65,
        lowest_amount: 1,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Cosmic Evolution Stones').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 25,
        lowest_amount: 1,
        highest_amount: 4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 3
        ).id,
        reward_id: resources.find(resource => resource.name === 'Cosmic Evolution Shards').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 10,
        lowest_amount: 1,
        highest_amount: 4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.0,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.0,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.0,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.0,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.0,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.0,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.0,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.0,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.0,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.0,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.0,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.0,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.0,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.0,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 3').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 29.0,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.0,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      
      //tier 4
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Cosmic Artifact').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 65,
        lowest_amount: 2,
        highest_amount: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Cosmic Evolution Shards').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 25,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 4
        ).id,
        reward_id: resources.find(resource => resource.name === 'Cosmic Evolution Chunks').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 10,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.8,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.2,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.8,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.2,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.8,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.2,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.8,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.2,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.8,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.2,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.8,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.2,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.8,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.2,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 4').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.8,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.2,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      
      //tier 5
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Cosmic Artifact').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 65,
        lowest_amount: 2,
        highest_amount: 4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Cosmic Evolution Shards').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 25,
        lowest_amount: 1,
        highest_amount: 4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 5
        ).id,
        reward_id: resources.find(resource => resource.name === 'Cosmic Evolution Chunks').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 10,
        lowest_amount: 1,
        highest_amount: 4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.4,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.4,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.4,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.4,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.4,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.4,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.4,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 5').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.4,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      
      //tier 6
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Cosmic Artifact').id,
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
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Cosmic Evolution Chunks').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 25,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Cosmic Evolution Gems').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 10,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.4,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.4,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.4,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Treasure Chest Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.4,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.4,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.4,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.4,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.6,
        lowest_amount: 1,
        highest_amount: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Bronze',
        luck: 70,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Experience Potion Tier 6').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Silver',
        luck: 28.4,
        lowest_amount: 1,
        highest_amount: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        reward_id: resources.find(resource => resource.name === 'Legendary Fragment').id,
        reward_type: 'resource',
        reward_description: null,
        name: 'Gold',
        luck: 1.6,
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
