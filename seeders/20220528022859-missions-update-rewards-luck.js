'use strict';

const { Missions, Items } = require('../models/index');

module.exports = {
  async up (queryInterface, Sequelize) {
    await Missions.bulkCreate(
      [
        {
          id: (await Missions.findOne({
            where: {
              name: 'Cosmic Particles 1'
            }
          })).id,
          item_pool_1: (await Items.findOne({
            where: {
              name: 'Volatile Sight'
            }
          })).id,
          item_pool_2: (await Items.findOne({
            where: {
              name: 'Salad Surprise'
            }
          })).id,
          item_pool_3: (await Items.findOne({
            where: {
              name: 'Super Speed'
            }
          })).id,
          item_pool_4: null,
          item_luck_1: 2.25,
          item_luck_2: 2,
          item_luck_3: 0.75,
          item_luck_4: 0,
          mission_luck: 5,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Rock'
            }
          })).id,
          item_pool_1: (await Items.findOne({
            where: {
              name: 'Enhanced Strength - Crushing Style'
            }
          })).id,
          item_pool_2: (await Items.findOne({
            where: {
              name: 'Volatile Strength - Crushing Style'
            }
          })).id,
          item_pool_3: (await Items.findOne({
            where: {
              name: 'Volatile Super Strength - Crushing Style'
            }
          })).id,
          item_pool_4: (await Items.findOne({
            where: {
              name: 'Super Strength - Crushing Style'
            }
          })).id,
          item_luck_1: 2,
          item_luck_2: 1.75,
          item_luck_3: 0.75,
          item_luck_4: 0.5,
          mission_luck: 5,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Rock and Ore'
            }
          })).id,
          item_pool_1: (await Items.findOne({
            where: {
              name: 'Enhanced Strength - Crushing Style'
            }
          })).id,
          item_pool_2: (await Items.findOne({
            where: {
              name: 'Volatile Sight'
            }
          })).id,
          item_pool_3: (await Items.findOne({
            where: {
              name: 'Volatile Super Strength - Piercing Style'
            }
          })).id,
          item_pool_4: (await Items.findOne({
            where: {
              name: 'Super Sight'
            }
          })).id,
          item_luck_1: 2,
          item_luck_2: 1.75,
          item_luck_3: 0.75,
          item_luck_4: 0.5,
          mission_luck: 5,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Wood, Rock, and Food'
            }
          })).id,
          item_pool_1: (await Items.findOne({
            where: {
              name: 'Volatile Agility'
            }
          })).id,
          item_pool_2: (await Items.findOne({
            where: {
              name: 'Enhanced Sight'
            }
          })).id,
          item_pool_3: (await Items.findOne({
            where: {
              name: 'Tainted Clover Porridge'
            }
          })).id,
          item_pool_4: (await Items.findOne({
            where: {
              name: 'Clairvoyant Perception'
            }
          })).id,
          item_luck_1: 2.2,
          item_luck_2: 1.925,
          item_luck_3: 0.825,
          item_luck_4: 0.55,
          mission_luck: 5.5,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Cosmic Particles 2'
            }
          })).id,
          item_pool_1: (await Items.findOne({
            where: {
              name: 'Volatile Speed'
            }
          })).id,
          item_pool_2: (await Items.findOne({
            where: {
              name: 'Enhanced Sight'
            }
          })).id,
          item_pool_3: (await Items.findOne({
            where: {
              name: 'Clairvoyant Perception'
            }
          })).id,
          item_pool_4: null,
          item_luck_1: 2.25,
          item_luck_2: 2,
          item_luck_3: 0.75,
          item_luck_4: 0,
          mission_luck: 5,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Wood and Food'
            }
          })).id,
          item_pool_1: (await Items.findOne({
            where: {
              name: 'Enhanced Agility'
            }
          })).id,
          item_pool_2: (await Items.findOne({
            where: {
              name: 'Enhanced Sight'
            }
          })).id,
          item_pool_3: (await Items.findOne({
            where: {
              name: 'Volatile Super Strength - Cutting Style'
            }
          })).id,
          item_pool_4: (await Items.findOne({
            where: {
              name: 'Volatile Super Sight'
            }
          })).id,
          item_luck_1: 2,
          item_luck_2: 1.75,
          item_luck_3: 0.75,
          item_luck_4: 0.5,
          mission_luck: 5,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Wood, Ore, and Food'
            }
          })).id,
          item_pool_1: (await Items.findOne({
            where: {
              name: 'Volatile Strength - Piercing Style'
            }
          })).id,
          item_pool_2: (await Items.findOne({
            where: {
              name: 'Enhanced Perception'
            }
          })).id,
          item_pool_3: (await Items.findOne({
            where: {
              name: 'Volatile Super Speed'
            }
          })).id,
          item_pool_4: (await Items.findOne({
            where: {
              name: 'Clover Porridge'
            }
          })).id,
          item_luck_1: 2.2,
          item_luck_2: 1.925,
          item_luck_3: 0.825,
          item_luck_4: 0.55,
          mission_luck: 5.5,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Cosmic Particles 3'
            }
          })).id,
          item_pool_1: (await Items.findOne({
            where: {
              name: 'Volatile Perception'
            }
          })).id,
          item_pool_2: (await Items.findOne({
            where: {
              name: 'Enhanced Speed'
            }
          })).id,
          item_pool_3: (await Items.findOne({
            where: {
              name: 'Clover Porridge'
            }
          })).id,
          item_pool_4: null,
          item_luck_1: 2.475,
          item_luck_2: 2.2,
          item_luck_3: 0.825,
          item_luck_4: 0,
          mission_luck: 5.5,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Wood, Rock, Ore, and Food'
            }
          })).id,
          item_pool_1: (await Items.findOne({
            where: {
              name: 'Enhanced Perception'
            }
          })).id,
          item_pool_2: (await Items.findOne({
            where: {
              name: 'Enhanced Speed'
            }
          })).id,
          item_pool_3: (await Items.findOne({
            where: {
              name: 'Clover Porridge'
            }
          })).id,
          item_pool_4: (await Items.findOne({
            where: {
              name: 'Super Sight'
            }
          })).id,
          item_luck_1: 2.4,
          item_luck_2: 2.1,
          item_luck_3: 0.9,
          item_luck_4: 0.6,
          mission_luck: 6,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Wood'
            }
          })).id,
          item_pool_1: (await Items.findOne({
            where: {
              name: 'Enhanced Strength - Cutting Style'
            }
          })).id,
          item_pool_2: (await Items.findOne({
            where: {
              name: 'Volatile Strength - Cutting Style'
            }
          })).id,
          item_pool_3: (await Items.findOne({
            where: {
              name: 'Volatile Super Strength - Cutting Style'
            }
          })).id,
          item_pool_4: (await Items.findOne({
            where: {
              name: 'Super Strength - Cutting Style'
            }
          })).id,
          item_luck_1: 2,
          item_luck_2: 1.75,
          item_luck_3: 0.75,
          item_luck_4: 0.5,
          mission_luck: 5,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Wood and Rock'
            }
          })).id,
          item_pool_1: (await Items.findOne({
            where: {
              name: 'Enhanced Strength - Cutting Style'
            }
          })).id,
          item_pool_2: (await Items.findOne({
            where: {
              name: 'Tainted Salad Surprise'
            }
          })).id,
          item_pool_3: (await Items.findOne({
            where: {
              name: 'Volatile Super Strength - Crushing Style'
            }
          })).id,
          item_pool_4: (await Items.findOne({
            where: {
              name: 'Clover Porridge'
            }
          })).id,
          item_luck_1: 2,
          item_luck_2: 1.75,
          item_luck_3: 0.75,
          item_luck_4: 0.5,
          mission_luck: 5,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Food'
            }
          })).id,
          item_pool_1: (await Items.findOne({
            where: {
              name: 'Enhanced Agility'
            }
          })).id,
          item_pool_2: (await Items.findOne({
            where: {
              name: 'Volatile Agility'
            }
          })).id,
          item_pool_3: (await Items.findOne({
            where: {
              name: 'Volatile Super Agility'
            }
          })).id,
          item_pool_4: (await Items.findOne({
            where: {
              name: 'Super Agility'
            }
          })).id,
          item_luck_1: 2,
          item_luck_2: 1.75,
          item_luck_3: 0.75,
          item_luck_4: 0.5,
          mission_luck: 5,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Rock and Food'
            }
          })).id,
          item_pool_1: (await Items.findOne({
            where: {
              name: 'Volatile Strength - Crushing Style'
            }
          })).id,
          item_pool_2: (await Items.findOne({
            where: {
              name: 'Volatile Speed'
            }
          })).id,
          item_pool_3: (await Items.findOne({
            where: {
              name: 'Super Agility'
            }
          })).id,
          item_pool_4: (await Items.findOne({
            where: {
              name: 'Super Speed'
            }
          })).id,
          item_luck_1: 2,
          item_luck_2: 1.75,
          item_luck_3: 0.75,
          item_luck_4: 0.5,
          mission_luck: 5,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Wood, Rock, and Ore'
            }
          })).id,
          item_pool_1: (await Items.findOne({
            where: {
              name: 'Volatile Agility'
            }
          })).id,
          item_pool_2: (await Items.findOne({
            where: {
              name: 'Enhanced Sight'
            }
          })).id,
          item_pool_3: (await Items.findOne({
            where: {
              name: 'Tainted Clover Porridge'
            }
          })).id,
          item_pool_4: (await Items.findOne({
            where: {
              name: 'Clairvoyant Perception'
            }
          })).id,
          item_luck_1: 2.2,
          item_luck_2: 1.925,
          item_luck_3: 0.825,
          item_luck_4: 0.55,
          mission_luck: 5.5,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Wood and Ore'
            }
          })).id,
          item_pool_1: (await Items.findOne({
            where: {
              name: 'Volatile Strength - Piercing Style'
            }
          })).id,
          item_pool_2: (await Items.findOne({
            where: {
              name: 'Enhanced Speed'
            }
          })).id,
          item_pool_3: (await Items.findOne({
            where: {
              name: 'Super Strength - Cutting Style'
            }
          })).id,
          item_pool_4: (await Items.findOne({
            where: {
              name: 'Volatile Super Speed'
            }
          })).id,
          item_luck_1: 2,
          item_luck_2: 1.75,
          item_luck_3: 0.75,
          item_luck_4: 0.5,
          mission_luck: 5,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Cosmic Particles 4'
            }
          })).id,
          item_pool_1: (await Items.findOne({
            where: {
              name: 'Tainted Salad Surprise'
            }
          })).id,
          item_pool_2: (await Items.findOne({
            where: {
              name: 'Enhanced Perception'
            }
          })).id,
          item_pool_3: (await Items.findOne({
            where: {
              name: 'Super Sight'
            }
          })).id,
          item_pool_4: null,
          item_luck_1: 2.7,
          item_luck_2: 2.4,
          item_luck_3: 0.9,
          item_luck_4: 0,
          mission_luck: 6,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Ore and Food'
            }
          })).id,
          item_pool_1: (await Items.findOne({
            where: {
              name: 'Enhanced Strength - Piercing Style'
            }
          })).id,
          item_pool_2: (await Items.findOne({
            where: {
              name: 'Salad Surprise'
            }
          })).id,
          item_pool_3: (await Items.findOne({
            where: {
              name: 'Volatile Super Agility'
            }
          })).id,
          item_pool_4: (await Items.findOne({
            where: {
              name: 'Tainted Clover Porridge'
            }
          })).id,
          item_luck_1: 2,
          item_luck_2: 1.75,
          item_luck_3: 0.75,
          item_luck_4: 0.5,
          mission_luck: 5,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Ore'
            }
          })).id,
          item_pool_1: (await Items.findOne({
            where: {
              name: 'Enhanced Strength - Piercing Style'
            }
          })).id,
          item_pool_2: (await Items.findOne({
            where: {
              name: 'Volatile Strength - Piercing Style'
            }
          })).id,
          item_pool_3: (await Items.findOne({
            where: {
              name: 'Volatile Super Strength - Piercing Style'
            }
          })).id,
          item_pool_4: (await Items.findOne({
            where: {
              name: 'Super Strength - Piercing Style'
            }
          })).id,
          item_luck_1: 2,
          item_luck_2: 1.75,
          item_luck_3: 0.75,
          item_luck_4: 0.5,
          mission_luck: 5,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Rock, Ore, and Food'
            }
          })).id,
          item_pool_1: (await Items.findOne({
            where: {
              name: 'Volatile Strength - Crushing Style'
            }
          })).id,
          item_pool_2: (await Items.findOne({
            where: {
              name: 'Salad Surprise'
            }
          })).id,
          item_pool_3: (await Items.findOne({
            where: {
              name: 'Volatile Super Sight'
            }
          })).id,
          item_pool_4: (await Items.findOne({
            where: {
              name: 'Super Speed'
            }
          })).id,
          item_luck_1: 2.2,
          item_luck_2: 1.925,
          item_luck_3: 0.825,
          item_luck_4: 0.55,
          mission_luck: 5.5,
        },
      ],
      {
        updateOnDuplicate: [
          "item_pool_1",
          "item_pool_2",
          "item_pool_3",
          "item_pool_4",
          "item_luck_1",
          "item_luck_2",
          "item_luck_3",
          "item_luck_4",
          "mission_luck",
        ],
      }
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Missions', null, {});
  }
};
