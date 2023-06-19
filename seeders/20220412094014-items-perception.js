'use strict';

// perception Items

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Items', [
      {
        name: 'Enhanced Perception',
        tier: 0,
        score: 1,
        description: 'Increase All Expedition Resource Rewards (inc. CP)',
        activation_chance: 100,
        effect_bonus: 10,
        icon: 'Enhanced Perception.png',
        durability: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'perception',
        effect_type: 'percentage'
      },{
        name: 'Super Perception',
        tier: 1,
        score: 2,
        description: 'Increase All Expedition Resource Rewards (inc. CP)',
        activation_chance: 100,
        effect_bonus: 12.5,
        icon: 'Super Perception.png',
        durability: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'perception',
        effect_type: 'percentage'
      },{
        name: 'Perception Amulet',
        tier: 2,
        score: 2,
        description: 'Increase All Expedition Resource Rewards (inc. CP)',
        activation_chance: 100,
        effect_bonus: 17.5,
        icon: 'Perception Amulet.png',
        durability: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'perception',
        effect_type: 'percentage'
      },{
        name: 'Volatile Perception',
        tier: 0,
        score: 1,
        description: 'A Chance to Increase All Expedition Resource Rewards',
        activation_chance: 20,
        effect_bonus: 25,
        icon: 'Volatile Perception.png',
        durability: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'perception',
        effect_type: 'percentage'
      },{
        name: 'Volatile Super Perception',
        tier: 1,
        score: 2,
        description: 'A Chance to Increase All Expedition Resource Rewards',
        activation_chance: 22.5,
        effect_bonus: 25,
        icon: 'Volatile Super Perception.png',
        durability: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'perception',
        effect_type: 'percentage'
      },{
        name: 'Volatile Perception Amulet',
        tier: 2,
        score: 3,
        description: 'A Chance to Increase All Expedition Resource Rewards',
        activation_chance: 25,
        effect_bonus: 33,
        icon: 'Volatile Perception Amulet.png',
        durability: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'perception',
        effect_type: 'percentage'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
