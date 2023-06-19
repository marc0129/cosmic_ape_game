'use strict';

// Speed Items

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Items', [
      {
        name: 'Enhanced Agility',
        tier: 0,
        score: 1,
        description: 'Increases Food Gathering',
        activation_chance: 100,
        effect_bonus: 2,
        icon: 'Enhanced Agility.png',
        durability: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'agility',
        effect_type: 'static'
      },{
        name: 'Super Agility',
        tier: 1,
        score: 2,
        description: 'Increases Food Gathering',
        activation_chance: 100,
        effect_bonus: 3,
        icon: 'Super Agility.png',
        durability: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'agility',
        effect_type: 'static'
      },{
        name: 'Agility Shoes',
        tier: 2,
        score: 2,
        description: 'Increases Food Gathering',
        activation_chance: 100,
        effect_bonus: 5,
        icon: 'Agility Shoes.png',
        durability: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'agility',
        effect_type: 'static'
      },{
        name: 'Volatile Agility',
        tier: 0,
        score: 1,
        description: 'A Chance to Increase Food Gathering',
        activation_chance: 20,
        effect_bonus: 6,
        icon: 'Volatile Agility.png',
        durability: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'agility',
        effect_type: 'static'
      },{
        name: 'Volatile Super Agility',
        tier: 1,
        score: 2,
        description: 'A Chance to Increase Food Gathering',
        activation_chance: 22.5,
        effect_bonus: 9,
        icon: 'Volatile Super Agility.png',
        durability: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'agility',
        effect_type: 'static'
      },{
        name: 'Volatile Agility Shoes',
        tier: 2,
        score: 3,
        description: 'A Chance to Increase Food Gathering',
        activation_chance: 25,
        effect_bonus: 12,
        icon: 'Volatile Agility Shoes.png',
        durability: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'agility',
        effect_type: 'static'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
