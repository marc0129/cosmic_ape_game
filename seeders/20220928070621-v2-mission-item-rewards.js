'use strict';

const {
  Items,
  Maps,
  Missions,
  Mission_Item_Reward,
} = require("../models/index");

module.exports = {
  async up (queryInterface, Sequelize) {
    
    const items = await Items.findAll()
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
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Fox Mask Tier 1').id,
        name: 'pool1',
        luck: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Maneki-Neko Charm Tier 1').id,
        name: 'pool2',
        luck: 1.75,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Pickaxe Tier 1').id,
        name: 'pool3',
        luck: 1.25,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Fallen Angel Trainers Tier 1').id,
        name: 'pool1',
        luck: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Third Eye Fox Mask Tier 1').id,
        name: 'pool2',
        luck: 1.75,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Giant Hammer Tier 1').id,
        name: 'pool3',
        luck: 1.25,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Red Ribbon Coins Tier 1').id,
        name: 'pool1',
        luck: 2.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Angel Wing Trainers Tier 1').id,
        name: 'pool2',
        luck: 1.925,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Axe Tier 1').id,
        name: 'pool3',
        luck: 1.375,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Cosmic Coin Flip Tier 1').id,
        name: 'pool1',
        luck: 2.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Frog Pouch Tier 1').id,
        name: 'pool2',
        luck: 2.1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Harvest Rake Tier 1').id,
        name: 'pool3',
        luck: 1.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Axe Tier 1').id,
        name: 'pool1',
        luck: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'One-Sided Pickaxe Tier 1').id,
        name: 'pool2',
        luck: 1.75,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Maneki-Neko Charm Tier 1').id,
        name: 'pool3',
        luck: 1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Giant Hammer Tier 1').id,
        name: 'pool1',
        luck: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Harvest Sickle Tier 1').id,
        name: 'pool2',
        luck: 1.75,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Third Eye Fox Mask Tier 1').id,
        name: 'pool3',
        luck: 1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Pickaxe Tier 1').id,
        name: 'pool1',
        luck: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Ball Point Gauntlets Tier 1').id,
        name: 'pool2',
        luck: 1.75,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Angel Wing Trainers Tier 1').id,
        name: 'pool3',
        luck: 1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Harvest Rake Tier 1').id,
        name: 'pool1',
        luck: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'One-Sided Axe Tier 1').id,
        name: 'pool2',
        luck: 1.75,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Frog Pouch Tier 1').id,
        name: 'pool3',
        luck: 1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Angel Wing Trainers Tier 1').id,
        name: 'pool1',
        luck: 2.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Red Ribbon Coins Tier 1').id,
        name: 'pool2',
        luck: 2.1,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 1
        ).id,
        item_id: items.find(item => item.name === 'Cosmic Coin Flip Tier 1').id,
        name: 'pool3',
        luck: 1.2,
        createdAt: now,
        updatedAt: now,
      },
      //tier 2
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Fox Mask Tier 2').id,
        name: 'pool1',
        luck: 2.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Maneki-Neko Charm Tier 2').id,
        name: 'pool2',
        luck: 2.45,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Pickaxe Tier 2').id,
        name: 'pool3',
        luck: 1.75,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Fallen Angel Trainers Tier 2').id,
        name: 'pool1',
        luck: 2.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Third Eye Fox Mask Tier 2').id,
        name: 'pool2',
        luck: 2.45,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Giant Hammer Tier 2').id,
        name: 'pool3',
        luck: 1.75,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Red Ribbon Coins Tier 2').id,
        name: 'pool1',
        luck: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Angel Wing Trainers Tier 2').id,
        name: 'pool2',
        luck: 2.625,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Axe Tier 2').id,
        name: 'pool3',
        luck: 1.875,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Cosmic Coin Flip Tier 2').id,
        name: 'pool1',
        luck: 3.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Frog Pouch Tier 2').id,
        name: 'pool2',
        luck: 2.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Harvest Rake Tier 2').id,
        name: 'pool3',
        luck: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Axe Tier 2').id,
        name: 'pool1',
        luck: 2.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'One-Sided Pickaxe Tier 2').id,
        name: 'pool2',
        luck: 2.45,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Maneki-Neko Charm Tier 2').id,
        name: 'pool3',
        luck: 1.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Giant Hammer Tier 2').id,
        name: 'pool1',
        luck: 2.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Harvest Sickle Tier 2').id,
        name: 'pool2',
        luck: 2.45,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Third Eye Fox Mask Tier 2').id,
        name: 'pool3',
        luck: 1.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Pickaxe Tier 2').id,
        name: 'pool1',
        luck: 2.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Ball Point Gauntlets Tier 2').id,
        name: 'pool2',
        luck: 2.45,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Angel Wing Trainers Tier 2').id,
        name: 'pool3',
        luck: 1.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Harvest Rake Tier 2').id,
        name: 'pool1',
        luck: 2.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'One-Sided Axe Tier 2').id,
        name: 'pool2',
        luck: 2.45,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Frog Pouch Tier 2').id,
        name: 'pool3',
        luck: 1.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Angel Wing Trainers Tier 2').id,
        name: 'pool1',
        luck: 3.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Red Ribbon Coins Tier 2').id,
        name: 'pool2',
        luck: 2.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 2
        ).id,
        item_id: items.find(item => item.name === 'Cosmic Coin Flip Tier 2').id,
        name: 'pool3',
        luck: 1.6,
        createdAt: now,
        updatedAt: now,
      },
      //tier 3
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Fox Mask Tier 3').id,
        name: 'pool1',
        luck: 3.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Maneki-Neko Charm Tier 3').id,
        name: 'pool2',
        luck: 3.15,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Pickaxe Tier 3').id,
        name: 'pool3',
        luck: 2.25,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Fallen Angel Trainers Tier 3').id,
        name: 'pool1',
        luck: 3.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Third Eye Fox Mask Tier 3').id,
        name: 'pool2',
        luck: 3.15,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Giant Hammer Tier 3').id,
        name: 'pool3',
        luck: 2.25,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Red Ribbon Coins Tier 3').id,
        name: 'pool1',
        luck: 3.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Angel Wing Trainers Tier 3').id,
        name: 'pool2',
        luck: 3.325,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Axe Tier 3').id,
        name: 'pool3',
        luck: 2.375,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Cosmic Coin Flip Tier 3').id,
        name: 'pool1',
        luck: 4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Frog Pouch Tier 3').id,
        name: 'pool2',
        luck: 3.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Harvest Rake Tier 3').id,
        name: 'pool3',
        luck: 2.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Axe Tier 3').id,
        name: 'pool1',
        luck: 3.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'One-Sided Pickaxe Tier 3').id,
        name: 'pool2',
        luck: 3.15,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Maneki-Neko Charm Tier 3').id,
        name: 'pool3',
        luck: 1.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Giant Hammer Tier 3').id,
        name: 'pool1',
        luck: 3.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Harvest Sickle Tier 3').id,
        name: 'pool2',
        luck: 3.15,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Third Eye Fox Mask Tier 3').id,
        name: 'pool3',
        luck: 1.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Pickaxe Tier 3').id,
        name: 'pool1',
        luck: 3.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Ball Point Gauntlets Tier 3').id,
        name: 'pool2',
        luck: 3.15,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Angel Wing Trainers Tier 3').id,
        name: 'pool3',
        luck: 1.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Harvest Rake Tier 3').id,
        name: 'pool1',
        luck: 3.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'One-Sided Axe Tier 3').id,
        name: 'pool2',
        luck: 3.15,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Frog Pouch Tier 3').id,
        name: 'pool3',
        luck: 1.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Angel Wing Trainers Tier 3').id,
        name: 'pool1',
        luck: 4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Red Ribbon Coins Tier 3').id,
        name: 'pool2',
        luck: 3.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 3
        ).id,
        item_id: items.find(item => item.name === 'Cosmic Coin Flip Tier 3').id,
        name: 'pool3',
        luck: 2,
        createdAt: now,
        updatedAt: now,
      },
      //tier 4
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Fox Mask Tier 4').id,
        name: 'pool1',
        luck: 4.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Maneki-Neko Charm Tier 4').id,
        name: 'pool2',
        luck: 3.85,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Pickaxe Tier 4').id,
        name: 'pool3',
        luck: 2.75,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Fallen Angel Trainers Tier 4').id,
        name: 'pool1',
        luck: 4.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Third Eye Fox Mask Tier 4').id,
        name: 'pool2',
        luck: 3.85,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Giant Hammer Tier 4').id,
        name: 'pool3',
        luck: 2.75,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Red Ribbon Coins Tier 4').id,
        name: 'pool1',
        luck: 4.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Angel Wing Trainers Tier 4').id,
        name: 'pool2',
        luck: 4.025,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Axe Tier 4').id,
        name: 'pool3',
        luck: 2.875,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Cosmic Coin Flip Tier 4').id,
        name: 'pool1',
        luck: 4.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Frog Pouch Tier 4').id,
        name: 'pool2',
        luck: 4.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Harvest Rake Tier 4').id,
        name: 'pool3',
        luck: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Axe Tier 4').id,
        name: 'pool1',
        luck: 4.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'One-Sided Pickaxe Tier 4').id,
        name: 'pool2',
        luck: 3.85,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Maneki-Neko Charm Tier 4').id,
        name: 'pool3',
        luck: 2.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Giant Hammer Tier 4').id,
        name: 'pool1',
        luck: 4.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Harvest Sickle Tier 4').id,
        name: 'pool2',
        luck: 3.85,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Third Eye Fox Mask Tier 4').id,
        name: 'pool3',
        luck: 2.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Pickaxe Tier 4').id,
        name: 'pool1',
        luck: 4.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Ball Point Gauntlets Tier 4').id,
        name: 'pool2',
        luck: 3.85,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Angel Wing Trainers Tier 4').id,
        name: 'pool3',
        luck: 2.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Harvest Rake Tier 4').id,
        name: 'pool1',
        luck: 4.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'One-Sided Axe Tier 4').id,
        name: 'pool2',
        luck: 3.85,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Frog Pouch Tier 4').id,
        name: 'pool3',
        luck: 2.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Angel Wing Trainers Tier 4').id,
        name: 'pool1',
        luck: 4.8,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Red Ribbon Coins Tier 4').id,
        name: 'pool2',
        luck: 4.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 4
        ).id,
        item_id: items.find(item => item.name === 'Cosmic Coin Flip Tier 4').id,
        name: 'pool3',
        luck: 2.4,
        createdAt: now,
        updatedAt: now,
      },
      //tier 5
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Fox Mask Tier 5').id,
        name: 'pool1',
        luck: 5.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Maneki-Neko Charm Tier 5').id,
        name: 'pool2',
        luck: 4.55,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Pickaxe Tier 5').id,
        name: 'pool3',
        luck: 3.25,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Fallen Angel Trainers Tier 5').id,
        name: 'pool1',
        luck: 5.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Third Eye Fox Mask Tier 5').id,
        name: 'pool2',
        luck: 4.45,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Giant Hammer Tier 5').id,
        name: 'pool3',
        luck: 3.25,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Red Ribbon Coins Tier 5').id,
        name: 'pool1',
        luck: 5.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Angel Wing Trainers Tier 5').id,
        name: 'pool2',
        luck: 4.725,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Axe Tier 5').id,
        name: 'pool3',
        luck: 3.375,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Cosmic Coin Flip Tier 5').id,
        name: 'pool1',
        luck: 5.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Frog Pouch Tier 5').id,
        name: 'pool2',
        luck: 4.9,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Harvest Rake Tier 5').id,
        name: 'pool3',
        luck: 3.5,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Axe Tier 5').id,
        name: 'pool1',
        luck: 5.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'One-Sided Pickaxe Tier 5').id,
        name: 'pool2',
        luck: 4.55,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Maneki-Neko Charm Tier 5').id,
        name: 'pool3',
        luck: 2.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Giant Hammer Tier 5').id,
        name: 'pool1',
        luck: 5.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Harvest Sickle Tier 5').id,
        name: 'pool2',
        luck: 4.55,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Third Eye Fox Mask Tier 5').id,
        name: 'pool3',
        luck: 2.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Pickaxe Tier 5').id,
        name: 'pool1',
        luck: 5.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Ball Point Gauntlets Tier 5').id,
        name: 'pool2',
        luck: 4.55,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Angel Wing Trainers Tier 5').id,
        name: 'pool3',
        luck: 2.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Harvest Rake Tier 5').id,
        name: 'pool1',
        luck: 5.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'One-Sided Axe Tier 5').id,
        name: 'pool2',
        luck: 4.55,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Frog Pouch Tier 5').id,
        name: 'pool3',
        luck: 2.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Angel Wing Trainers Tier 5').id,
        name: 'pool1',
        luck: 5.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Red Ribbon Coins Tier 5').id,
        name: 'pool2',
        luck: 4.9,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 5
        ).id,
        item_id: items.find(item => item.name === 'Cosmic Coin Flip Tier 5').id,
        name: 'pool3',
        luck: 2.8,
        createdAt: now,
        updatedAt: now,
      },
      //tier 6
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Fox Mask Tier 6').id,
        name: 'pool1',
        luck: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Maneki-Neko Charm Tier 6').id,
        name: 'pool2',
        luck: 5.25,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Gold' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Pickaxe Tier 6').id,
        name: 'pool3',
        luck: 3.75,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Fallen Angel Trainers Tier 6').id,
        name: 'pool1',
        luck: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Third Eye Fox Mask Tier 6').id,
        name: 'pool2',
        luck: 5.25,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Experience' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Giant Hammer Tier 6').id,
        name: 'pool3',
        luck: 3.75,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Red Ribbon Coins Tier 6').id,
        name: 'pool1',
        luck: 6.2,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Angel Wing Trainers Tier 6').id,
        name: 'pool2',
        luck: 5.425,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Gold' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Axe Tier 6').id,
        name: 'pool3',
        luck: 3.875,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Cosmic Coin Flip Tier 6').id,
        name: 'pool1',
        luck: 6.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Frog Pouch Tier 6').id,
        name: 'pool2',
        luck: 5.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Experience' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Harvest Rake Tier 6').id,
        name: 'pool3',
        luck: 4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Axe Tier 6').id,
        name: 'pool1',
        luck: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'One-Sided Pickaxe Tier 6').id,
        name: 'pool2',
        luck: 5.25,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'CRYSTAL FOREST' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Maneki-Neko Charm Tier 6').id,
        name: 'pool3',
        luck: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Giant Hammer Tier 6').id,
        name: 'pool1',
        luck: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Harvest Sickle Tier 6').id,
        name: 'pool2',
        luck: 5.25,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'THE LOST CITY OF LASOL' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Third Eye Fox Mask Tier 6').id,
        name: 'pool3',
        luck: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Two-Sided Pickaxe Tier 6').id,
        name: 'pool1',
        luck: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Ball Point Gauntlets Tier 6').id,
        name: 'pool2',
        luck: 5.25,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'AZULHENGE' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Angel Wing Trainers Tier 6').id,
        name: 'pool3',
        luck: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Harvest Rake Tier 6').id,
        name: 'pool1',
        luck: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'One-Sided Axe Tier 6').id,
        name: 'pool2',
        luck: 5.25,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'PRISM VALLEY' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Frog Pouch Tier 6').id,
        name: 'pool3',
        luck: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Angel Wing Trainers Tier 6').id,
        name: 'pool1',
        luck: 6.4,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Red Ribbon Coins Tier 6').id,
        name: 'pool2',
        luck: 5.6,
        createdAt: now,
        updatedAt: now,
      },
      {
        mission_id: missions.find(
          mission => mission.main_branch === 'Expedition' && mission.Map.name === 'COSMIC VILLAGE' && mission.secondary_branch === 'Resource' && mission.tier === 6
        ).id,
        item_id: items.find(item => item.name === 'Cosmic Coin Flip Tier 6').id,
        name: 'pool3',
        luck: 3.2,
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
