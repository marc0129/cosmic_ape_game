'use strict';

// sight Items

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Items', [
      {
        name: 'Enhanced Sight',
        tier: 0,
        score: 1,
        description: 'Reduces Cost of Expedition Missions',
        activation_chance: 100,
        effect_bonus: 10,
        icon: 'Enhanced Sight.png',
        durability: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'sight',
        effect_type: 'percentage'
      },{
        name: 'Super Sight',
        tier: 1,
        score: 2,
        description: 'Reduces Cost of Expedition Missions',
        activation_chance: 100,
        effect_bonus: 12.5,
        icon: 'Super Sight.png',
        durability: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'sight',
        effect_type: 'percentage'
      },{
        name: 'Sight Goggles',
        tier: 2,
        score: 2,
        description: 'Reduces Cost of Expedition Missions',
        activation_chance: 100,
        effect_bonus: 17.5,
        icon: 'Sight Goggles.png',
        durability: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'sight',
        effect_type: 'percentage'
      },{
        name: 'Volatile Sight',
        tier: 0,
        score: 1,
        description: 'A Chance to Reduce Cost of Expedition Missions',
        activation_chance: 20,
        effect_bonus: 25,
        icon: 'Volatile Sight.png',
        durability: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'sight',
        effect_type: 'percentage'
      },{
        name: 'Volatile Super Sight',
        tier: 1,
        score: 2,
        description: 'A Chance to Reduce Cost of Expedition Missions',
        activation_chance: 22.5,
        effect_bonus: 25,
        icon: 'Volatile Super Sight.png',
        durability: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'sight',
        effect_type: 'percentage'
      },{
        name: 'Volatile Sight Goggles',
        tier: 2,
        score: 3,
        description: 'A Chance to Reduce Cost of Expedition Missions',
        activation_chance: 25,
        effect_bonus: 33,
        icon: 'Volatile Sight Goggles.png',
        durability: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'sight',
        effect_type: 'percentage'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
