'use strict';

// Speed Items

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Items', [
      {
        name: 'Enhanced Strength - Cutting Style',
        tier: 0,
        score: 1,
        description: 'Increases Wood Gathering',
        activation_chance: 100,
        effect_bonus: 2,
        icon: 'Enhanced Strength - Cutting Style.png',
        durability: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'str-cutting',
        effect_type: 'static'
      },{
        name: 'Super Strength - Cutting Style',
        tier: 1,
        score: 2,
        description: 'Increases Wood Gathering',
        activation_chance: 100,
        effect_bonus: 3,
        icon: 'Super Strength - Cutting Style.png',
        durability: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'str-cutting',
        effect_type: 'static'
      },{
        name: 'Strength Gauntlets - Cutting Style',
        tier: 2,
        score: 2,
        description: 'Increases Wood Gathering',
        activation_chance: 100,
        effect_bonus: 5,
        icon: 'Strength Gauntlets - Cutting Style.png',
        durability: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'str-cutting',
        effect_type: 'static'
      },{
        name: 'Volatile Strength - Cutting Style',
        tier: 0,
        score: 1,
        description: 'A Chance to Increase Wood Gathering',
        activation_chance: 20,
        effect_bonus: 6,
        icon: 'Volatile Strength - Cutting Style.png',
        durability: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'str-cutting',
        effect_type: 'static'
      },{
        name: 'Volatile Super Strength - Cutting Style',
        tier: 1,
        score: 2,
        description: 'A Chance to Increase Wood Gathering',
        activation_chance: 22.5,
        effect_bonus: 9,
        icon: 'Volatile Super Strength - Cutting Style.png',
        durability: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'str-cutting',
        effect_type: 'static'
      },{
        name: 'Volatile Strength Gauntlets - Cutting Style',
        tier: 2,
        score: 3,
        description: 'A Chance to Increase Wood Gathering',
        activation_chance: 25,
        effect_bonus: 12,
        icon: 'Volatile Strength Gauntlets - Cutting Style.png',
        durability: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'str-cutting',
        effect_type: 'static'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
