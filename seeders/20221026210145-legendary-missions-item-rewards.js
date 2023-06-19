'use strict';

const {
  Items,
  Utility,
  Maps,
  Missions,
  Mission_Item_Reward,
} = require("../models/index");

module.exports = {
  async up (queryInterface, Sequelize) {
    
    const items = await Items.findAll()
    const utilities = await Utility.findAll()
    const missions = await Missions.findAll({
      where: {
        is_active: true
      },
      include: Maps,
    })
    const now = new Date()

    const missionItemRewards = await Mission_Item_Reward.bulkCreate([
      //tier 1
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 1
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 1').id,
        type: 'utility',
        name: 'pool1',
        luck: 1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 1
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 2').id,
        type: 'utility',
        name: 'pool2',
        luck: 1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 1
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 3').id,
        type: 'utility',
        name: 'pool3',
        luck: 1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 1
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 4').id,
        type: 'utility',
        name: 'pool4',
        luck: 1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === 'Giant Hammer Tier 1').id,
        type: 'item',
        name: 'pool1',
        luck: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === 'Fallen Angel Trainers Tier 1').id,
        type: 'item',
        name: 'pool2',
        luck: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Titan's Gauntlet Tier 1").id,
        type: 'item',
        name: 'pool3',
        luck: 1.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Loki's Coin Tier 1").id,
        type: 'item',
        name: 'pool4',
        luck: 1.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Two-Sided Pickaxe Tier 1").id,
        type: 'item',
        name: 'pool1',
        luck: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Red Ribbon Coins Tier 1").id,
        type: 'item',
        name: 'pool2',
        luck: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Cosmic Pickaxe Tier 1").id,
        type: 'item',
        name: 'pool3',
        luck: 1.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Scroll of God Tier 1").id,
        type: 'item',
        name: 'pool4',
        luck: 1.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Harvest Rake Tier 1").id,
        type: 'item',
        name: 'pool1',
        luck: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Fox Mask Tier 1").id,
        type: 'item',
        name: 'pool2',
        luck: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Ankle Breakers Tier 1").id,
        type: 'item',
        name: 'pool3',
        luck: 1.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Dragon Mask of Misfortune Tier 1").id,
        type: 'item',
        name: 'pool4',
        luck: 1.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Two-Sided Axe Tier 1").id,
        type: 'item',
        name: 'pool1',
        luck: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Cosmic Coin Flip Tier 1").id,
        type: 'item',
        name: 'pool2',
        luck: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Castor's Hatchet Tier 1").id,
        type: 'item',
        name: 'pool3',
        luck: 1.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "5 Leaf Clover Tier 1").id,
        type: 'item',
        name: 'pool4',
        luck: 1.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === 'Frog Pouch Tier 1').id,
        type: 'item',
        name: 'pool1',
        luck: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === 'One-Sided Pickaxe Tier 1').id,
        type: 'item',
        name: 'pool2',
        luck: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Midas Touch Tier 1").id,
        type: 'item',
        name: 'pool3',
        luck: 1.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Ether Pickaxe Tier 1").id,
        type: 'item',
        name: 'pool4',
        luck: 1.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Angel Wing Trainers Tier 1").id,
        type: 'item',
        name: 'pool1',
        luck: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Ball Point Gauntlets Tier 1").id,
        type: 'item',
        name: 'pool2',
        luck: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Winged Sandals of Hermes Tier 1").id,
        type: 'item',
        name: 'pool3',
        luck: 1.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Hercules' Belt Tier 1").id,
        type: 'item',
        name: 'pool4',
        luck: 1.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Maneki-Neko Charm Tier 1").id,
        type: 'item',
        name: 'pool1',
        luck: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "One-Sided Axe Tier 1").id,
        type: 'item',
        name: 'pool2',
        luck: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Clover of God Tier 1").id,
        type: 'item',
        name: 'pool3',
        luck: 1.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Claws of Wolverine Tier 1").id,
        type: 'item',
        name: 'pool4',
        luck: 1.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Third Eye Fox Mask Tier 1").id,
        type: 'item',
        name: 'pool1',
        luck: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Harvest Sickle Tier 1").id,
        type: 'item',
        name: 'pool2',
        luck: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Detective Vision Tier 1").id,
        type: 'item',
        name: 'pool3',
        luck: 1.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 1 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Artemis' Tiara Tier 1").id,
        type: 'item',
        name: 'pool4',
        luck: 1.5,
        createdAt: now,
        updatedAt: now,
      },
      
      //tier 2
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 2
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 1').id,
        type: 'utility',
        name: 'pool1',
        luck: 1.25,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 2
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 2').id,
        type: 'utility',
        name: 'pool2',
        luck: 1.25,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 2
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 3').id,
        type: 'utility',
        name: 'pool3',
        luck: 1.25,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 2
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 4').id,
        type: 'utility',
        name: 'pool4',
        luck: 1.25,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === 'Giant Hammer Tier 2').id,
        type: 'item',
        name: 'pool1',
        luck: 6.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === 'Fallen Angel Trainers Tier 2').id,
        type: 'item',
        name: 'pool2',
        luck: 6.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Titan's Gauntlet Tier 2").id,
        type: 'item',
        name: 'pool3',
        luck: 1.7,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Loki's Coin Tier 2").id,
        type: 'item',
        name: 'pool4',
        luck: 1.7,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Two-Sided Pickaxe Tier 2").id,
        type: 'item',
        name: 'pool1',
        luck: 6.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Red Ribbon Coins Tier 2").id,
        type: 'item',
        name: 'pool2',
        luck: 6.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Cosmic Pickaxe Tier 2").id,
        type: 'item',
        name: 'pool3',
        luck: 1.7,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Scroll of God Tier 2").id,
        type: 'item',
        name: 'pool4',
        luck: 1.7,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Harvest Rake Tier 2").id,
        type: 'item',
        name: 'pool1',
        luck: 6.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Fox Mask Tier 2").id,
        type: 'item',
        name: 'pool2',
        luck: 6.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Ankle Breakers Tier 2").id,
        type: 'item',
        name: 'pool3',
        luck: 1.7,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Dragon Mask of Misfortune Tier 2").id,
        type: 'item',
        name: 'pool4',
        luck: 1.7,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Two-Sided Axe Tier 2").id,
        type: 'item',
        name: 'pool1',
        luck: 6.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Cosmic Coin Flip Tier 2").id,
        type: 'item',
        name: 'pool2',
        luck: 6.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Castor's Hatchet Tier 2").id,
        type: 'item',
        name: 'pool3',
        luck: 1.7,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "5 Leaf Clover Tier 2").id,
        type: 'item',
        name: 'pool4',
        luck: 1.7,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === 'Frog Pouch Tier 2').id,
        type: 'item',
        name: 'pool1',
        luck: 6.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === 'One-Sided Pickaxe Tier 2').id,
        type: 'item',
        name: 'pool2',
        luck: 6.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Midas Touch Tier 2").id,
        type: 'item',
        name: 'pool3',
        luck: 1.7,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Ether Pickaxe Tier 2").id,
        type: 'item',
        name: 'pool4',
        luck: 1.7,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Angel Wing Trainers Tier 2").id,
        type: 'item',
        name: 'pool1',
        luck: 6.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Ball Point Gauntlets Tier 2").id,
        type: 'item',
        name: 'pool2',
        luck: 6.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Winged Sandals of Hermes Tier 2").id,
        type: 'item',
        name: 'pool3',
        luck: 1.7,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Hercules' Belt Tier 2").id,
        type: 'item',
        name: 'pool4',
        luck: 1.7,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Maneki-Neko Charm Tier 2").id,
        type: 'item',
        name: 'pool1',
        luck: 6.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "One-Sided Axe Tier 2").id,
        type: 'item',
        name: 'pool2',
        luck: 6.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Clover of God Tier 2").id,
        type: 'item',
        name: 'pool3',
        luck: 1.7,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Claws of Wolverine Tier 2").id,
        type: 'item',
        name: 'pool4',
        luck: 1.7,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Third Eye Fox Mask Tier 2").id,
        type: 'item',
        name: 'pool1',
        luck: 6.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Harvest Sickle Tier 2").id,
        type: 'item',
        name: 'pool2',
        luck: 6.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Detective Vision Tier 2").id,
        type: 'item',
        name: 'pool3',
        luck: 1.7,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 2 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Artemis' Tiara Tier 2").id,
        type: 'item',
        name: 'pool4',
        luck: 1.7,
        createdAt: now,
        updatedAt: now,
      },
      
      //tier 3
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 3
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 1').id,
        type: 'utility',
        name: 'pool1',
        luck: 1.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 3
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 2').id,
        type: 'utility',
        name: 'pool2',
        luck: 1.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 3
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 3').id,
        type: 'utility',
        name: 'pool3',
        luck: 1.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 3
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 4').id,
        type: 'utility',
        name: 'pool4',
        luck: 1.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === 'Giant Hammer Tier 3').id,
        type: 'item',
        name: 'pool1',
        luck: 7.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === 'Fallen Angel Trainers Tier 3').id,
        type: 'item',
        name: 'pool2',
        luck: 7.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Titan's Gauntlet Tier 3").id,
        type: 'item',
        name: 'pool3',
        luck: 1.9,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Loki's Coin Tier 3").id,
        type: 'item',
        name: 'pool4',
        luck: 1.9,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Two-Sided Pickaxe Tier 3").id,
        type: 'item',
        name: 'pool1',
        luck: 7.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Red Ribbon Coins Tier 3").id,
        type: 'item',
        name: 'pool2',
        luck: 7.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Cosmic Pickaxe Tier 3").id,
        type: 'item',
        name: 'pool3',
        luck: 1.9,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Scroll of God Tier 3").id,
        type: 'item',
        name: 'pool4',
        luck: 1.9,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Harvest Rake Tier 3").id,
        type: 'item',
        name: 'pool1',
        luck: 7.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Fox Mask Tier 3").id,
        type: 'item',
        name: 'pool2',
        luck: 7.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Ankle Breakers Tier 3").id,
        type: 'item',
        name: 'pool3',
        luck: 1.9,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Dragon Mask of Misfortune Tier 3").id,
        type: 'item',
        name: 'pool4',
        luck: 1.9,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Two-Sided Axe Tier 3").id,
        type: 'item',
        name: 'pool1',
        luck: 7.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Cosmic Coin Flip Tier 3").id,
        type: 'item',
        name: 'pool2',
        luck: 7.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Castor's Hatchet Tier 3").id,
        type: 'item',
        name: 'pool3',
        luck: 1.9,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "5 Leaf Clover Tier 3").id,
        type: 'item',
        name: 'pool4',
        luck: 1.9,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === 'Frog Pouch Tier 3').id,
        type: 'item',
        name: 'pool1',
        luck: 7.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === 'One-Sided Pickaxe Tier 3').id,
        type: 'item',
        name: 'pool2',
        luck: 7.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Midas Touch Tier 3").id,
        type: 'item',
        name: 'pool3',
        luck: 1.9,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Ether Pickaxe Tier 3").id,
        type: 'item',
        name: 'pool4',
        luck: 1.9,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Angel Wing Trainers Tier 3").id,
        type: 'item',
        name: 'pool1',
        luck: 7.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Ball Point Gauntlets Tier 3").id,
        type: 'item',
        name: 'pool2',
        luck: 7.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Winged Sandals of Hermes Tier 3").id,
        type: 'item',
        name: 'pool3',
        luck: 1.9,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Hercules' Belt Tier 3").id,
        type: 'item',
        name: 'pool4',
        luck: 1.9,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Maneki-Neko Charm Tier 3").id,
        type: 'item',
        name: 'pool1',
        luck: 7.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "One-Sided Axe Tier 3").id,
        type: 'item',
        name: 'pool2',
        luck: 7.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Clover of God Tier 3").id,
        type: 'item',
        name: 'pool3',
        luck: 1.9,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Claws of Wolverine Tier 3").id,
        type: 'item',
        name: 'pool4',
        luck: 1.9,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Third Eye Fox Mask Tier 3").id,
        type: 'item',
        name: 'pool1',
        luck: 7.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Harvest Sickle Tier 3").id,
        type: 'item',
        name: 'pool2',
        luck: 7.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Detective Vision Tier 3").id,
        type: 'item',
        name: 'pool3',
        luck: 1.9,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 3 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Artemis' Tiara Tier 3").id,
        type: 'item',
        name: 'pool4',
        luck: 1.9,
        createdAt: now,
        updatedAt: now,
      },
      
      //tier 4
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 4
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 1').id,
        type: 'utility',
        name: 'pool1',
        luck: 1.75,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 4
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 2').id,
        type: 'utility',
        name: 'pool2',
        luck: 1.75,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 4
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 3').id,
        type: 'utility',
        name: 'pool3',
        luck: 1.75,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 4
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 4').id,
        type: 'utility',
        name: 'pool4',
        luck: 1.75,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === 'Giant Hammer Tier 4').id,
        type: 'item',
        name: 'pool1',
        luck: 8.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === 'Fallen Angel Trainers Tier 4').id,
        type: 'item',
        name: 'pool2',
        luck: 8.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Titan's Gauntlet Tier 4").id,
        type: 'item',
        name: 'pool3',
        luck: 2.1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Loki's Coin Tier 4").id,
        type: 'item',
        name: 'pool4',
        luck: 2.1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Two-Sided Pickaxe Tier 4").id,
        type: 'item',
        name: 'pool1',
        luck: 8.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Red Ribbon Coins Tier 4").id,
        type: 'item',
        name: 'pool2',
        luck: 8.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Cosmic Pickaxe Tier 4").id,
        type: 'item',
        name: 'pool3',
        luck: 2.1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Scroll of God Tier 4").id,
        type: 'item',
        name: 'pool4',
        luck: 2.1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Harvest Rake Tier 4").id,
        type: 'item',
        name: 'pool1',
        luck: 8.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Fox Mask Tier 4").id,
        type: 'item',
        name: 'pool2',
        luck: 8.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Ankle Breakers Tier 4").id,
        type: 'item',
        name: 'pool3',
        luck: 2.1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Dragon Mask of Misfortune Tier 4").id,
        type: 'item',
        name: 'pool4',
        luck: 2.1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Two-Sided Axe Tier 4").id,
        type: 'item',
        name: 'pool1',
        luck: 8.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Cosmic Coin Flip Tier 4").id,
        type: 'item',
        name: 'pool2',
        luck: 8.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Castor's Hatchet Tier 4").id,
        type: 'item',
        name: 'pool3',
        luck: 2.1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "5 Leaf Clover Tier 4").id,
        type: 'item',
        name: 'pool4',
        luck: 2.1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === 'Frog Pouch Tier 4').id,
        type: 'item',
        name: 'pool1',
        luck: 8.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === 'One-Sided Pickaxe Tier 4').id,
        type: 'item',
        name: 'pool2',
        luck: 8.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Midas Touch Tier 4").id,
        type: 'item',
        name: 'pool3',
        luck: 2.1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Ether Pickaxe Tier 4").id,
        type: 'item',
        name: 'pool4',
        luck: 2.1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Angel Wing Trainers Tier 4").id,
        type: 'item',
        name: 'pool1',
        luck: 8.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Ball Point Gauntlets Tier 4").id,
        type: 'item',
        name: 'pool2',
        luck: 8.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Winged Sandals of Hermes Tier 4").id,
        type: 'item',
        name: 'pool3',
        luck: 2.1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Hercules' Belt Tier 4").id,
        type: 'item',
        name: 'pool4',
        luck: 2.1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Maneki-Neko Charm Tier 4").id,
        type: 'item',
        name: 'pool1',
        luck: 8.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "One-Sided Axe Tier 4").id,
        type: 'item',
        name: 'pool2',
        luck: 8.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Clover of God Tier 4").id,
        type: 'item',
        name: 'pool3',
        luck: 2.1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Claws of Wolverine Tier 4").id,
        type: 'item',
        name: 'pool4',
        luck: 2.1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Third Eye Fox Mask Tier 4").id,
        type: 'item',
        name: 'pool1',
        luck: 8.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Harvest Sickle Tier 4").id,
        type: 'item',
        name: 'pool2',
        luck: 8.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Detective Vision Tier 4").id,
        type: 'item',
        name: 'pool3',
        luck: 2.1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 4 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Artemis' Tiara Tier 4").id,
        type: 'item',
        name: 'pool4',
        luck: 2.1,
        createdAt: now,
        updatedAt: now,
      },
      
      //tier 5
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 5
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 1').id,
        type: 'utility',
        name: 'pool1',
        luck: 2.0,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 5
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 2').id,
        type: 'utility',
        name: 'pool2',
        luck: 2.0,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 5
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 3').id,
        type: 'utility',
        name: 'pool3',
        luck: 2.0,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 5
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 4').id,
        type: 'utility',
        name: 'pool4',
        luck: 2.0,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === 'Giant Hammer Tier 5').id,
        type: 'item',
        name: 'pool1',
        luck: 9.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === 'Fallen Angel Trainers Tier 5').id,
        type: 'item',
        name: 'pool2',
        luck: 9.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Titan's Gauntlet Tier 5").id,
        type: 'item',
        name: 'pool3',
        luck: 2.3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Loki's Coin Tier 5").id,
        type: 'item',
        name: 'pool4',
        luck: 2.3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Two-Sided Pickaxe Tier 5").id,
        type: 'item',
        name: 'pool1',
        luck: 9.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Red Ribbon Coins Tier 5").id,
        type: 'item',
        name: 'pool2',
        luck: 9.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Cosmic Pickaxe Tier 5").id,
        type: 'item',
        name: 'pool3',
        luck: 2.3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Scroll of God Tier 5").id,
        type: 'item',
        name: 'pool4',
        luck: 2.3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Harvest Rake Tier 5").id,
        type: 'item',
        name: 'pool1',
        luck: 9.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Fox Mask Tier 5").id,
        type: 'item',
        name: 'pool2',
        luck: 9.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Ankle Breakers Tier 5").id,
        type: 'item',
        name: 'pool3',
        luck: 2.3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Dragon Mask of Misfortune Tier 5").id,
        type: 'item',
        name: 'pool4',
        luck: 2.3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Two-Sided Axe Tier 5").id,
        type: 'item',
        name: 'pool1',
        luck: 9.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Cosmic Coin Flip Tier 5").id,
        type: 'item',
        name: 'pool2',
        luck: 9.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Castor's Hatchet Tier 5").id,
        type: 'item',
        name: 'pool3',
        luck: 2.3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "5 Leaf Clover Tier 5").id,
        type: 'item',
        name: 'pool4',
        luck: 2.3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === 'Frog Pouch Tier 5').id,
        type: 'item',
        name: 'pool1',
        luck: 9.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === 'One-Sided Pickaxe Tier 5').id,
        type: 'item',
        name: 'pool2',
        luck: 9.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Midas Touch Tier 5").id,
        type: 'item',
        name: 'pool3',
        luck: 2.3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Ether Pickaxe Tier 5").id,
        type: 'item',
        name: 'pool4',
        luck: 2.3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Angel Wing Trainers Tier 5").id,
        type: 'item',
        name: 'pool1',
        luck: 9.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Ball Point Gauntlets Tier 5").id,
        type: 'item',
        name: 'pool2',
        luck: 9.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Winged Sandals of Hermes Tier 5").id,
        type: 'item',
        name: 'pool3',
        luck: 2.3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Hercules' Belt Tier 5").id,
        type: 'item',
        name: 'pool4',
        luck: 2.3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Maneki-Neko Charm Tier 5").id,
        type: 'item',
        name: 'pool1',
        luck: 9.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "One-Sided Axe Tier 5").id,
        type: 'item',
        name: 'pool2',
        luck: 9.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Clover of God Tier 5").id,
        type: 'item',
        name: 'pool3',
        luck: 2.3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Claws of Wolverine Tier 5").id,
        type: 'item',
        name: 'pool4',
        luck: 2.3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Third Eye Fox Mask Tier 5").id,
        type: 'item',
        name: 'pool1',
        luck: 9.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Harvest Sickle Tier 5").id,
        type: 'item',
        name: 'pool2',
        luck: 9.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Detective Vision Tier 5").id,
        type: 'item',
        name: 'pool3',
        luck: 2.3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 5 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Artemis' Tiara Tier 5").id,
        type: 'item',
        name: 'pool4',
        luck: 2.3,
        createdAt: now,
        updatedAt: now,
      },
      
      //tier 6
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 6
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 1').id,
        type: 'utility',
        name: 'pool1',
        luck: 2.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 6
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 2').id,
        type: 'utility',
        name: 'pool2',
        luck: 2.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 6
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 3').id,
        type: 'utility',
        name: 'pool3',
        luck: 2.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian River' && mission.secondary_branch === 'Evolution' && mission.tier === 6
        ).id,
        item_id: utilities.find(item => item.name === 'Mysterious Key 4').id,
        type: 'utility',
        name: 'pool4',
        luck: 2.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === 'Giant Hammer Tier 6').id,
        type: 'item',
        name: 'pool1',
        luck: 10.0,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === 'Fallen Angel Trainers Tier 6').id,
        type: 'item',
        name: 'pool2',
        luck: 10.0,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Titan's Gauntlet Tier 6").id,
        type: 'item',
        name: 'pool3',
        luck: 2.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Loki's Coin Tier 6").id,
        type: 'item',
        name: 'pool4',
        luck: 2.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Two-Sided Pickaxe Tier 6").id,
        type: 'item',
        name: 'pool1',
        luck: 10.0,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Red Ribbon Coins Tier 6").id,
        type: 'item',
        name: 'pool2',
        luck: 10.0,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Cosmic Pickaxe Tier 6").id,
        type: 'item',
        name: 'pool3',
        luck: 2.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Scroll of God Tier 6").id,
        type: 'item',
        name: 'pool4',
        luck: 2.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Harvest Rake Tier 6").id,
        type: 'item',
        name: 'pool1',
        luck: 10.0,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Fox Mask Tier 6").id,
        type: 'item',
        name: 'pool2',
        luck: 10.0,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Ankle Breakers Tier 6").id,
        type: 'item',
        name: 'pool3',
        luck: 2.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Dragon Mask of Misfortune Tier 6").id,
        type: 'item',
        name: 'pool4',
        luck: 2.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Two-Sided Axe Tier 6").id,
        type: 'item',
        name: 'pool1',
        luck: 10.0,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Cosmic Coin Flip Tier 6").id,
        type: 'item',
        name: 'pool2',
        luck: 10.0,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "Castor's Hatchet Tier 6").id,
        type: 'item',
        name: 'pool3',
        luck: 2.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 6
        ).id,
        item_id: items.find(item => item.name === "5 Leaf Clover Tier 6").id,
        type: 'item',
        name: 'pool4',
        luck: 2.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === 'Frog Pouch Tier 6').id,
        type: 'item',
        name: 'pool1',
        luck: 10.0,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === 'One-Sided Pickaxe Tier 6').id,
        type: 'item',
        name: 'pool2',
        luck: 10.0,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Midas Touch Tier 6").id,
        type: 'item',
        name: 'pool3',
        luck: 2.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Iridian Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Ether Pickaxe Tier 6").id,
        type: 'item',
        name: 'pool4',
        luck: 2.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Angel Wing Trainers Tier 6").id,
        type: 'item',
        name: 'pool1',
        luck: 10.0,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Ball Point Gauntlets Tier 6").id,
        type: 'item',
        name: 'pool2',
        luck: 10.0,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Winged Sandals of Hermes Tier 6").id,
        type: 'item',
        name: 'pool3',
        luck: 2.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Rainfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Hercules' Belt Tier 6").id,
        type: 'item',
        name: 'pool4',
        luck: 2.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Maneki-Neko Charm Tier 6").id,
        type: 'item',
        name: 'pool1',
        luck: 10.0,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "One-Sided Axe Tier 6").id,
        type: 'item',
        name: 'pool2',
        luck: 10.0,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Clover of God Tier 6").id,
        type: 'item',
        name: 'pool3',
        luck: 2.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Evergreen Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Claws of Wolverine Tier 6").id,
        type: 'item',
        name: 'pool4',
        luck: 2.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Third Eye Fox Mask Tier 6").id,
        type: 'item',
        name: 'pool1',
        luck: 10.0,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Harvest Sickle Tier 6").id,
        type: 'item',
        name: 'pool2',
        luck: 10.0,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Detective Vision Tier 6").id,
        type: 'item',
        name: 'pool3',
        luck: 2.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'Waterfall Village' && mission.secondary_branch === 'Legendary' && mission.tier === 6 && mission.time === 8
        ).id,
        item_id: items.find(item => item.name === "Artemis' Tiara Tier 6").id,
        type: 'item',
        name: 'pool4',
        luck: 2.5,
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
