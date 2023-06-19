'use strict';

// Speed Items

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Items', [
      {
        name: 'Enhanced Speed',
        tier: 0,
        score: 1,
        description: 'Reduces Mission Time',
        activation_chance: 100,
        effect_bonus: 10,
        icon: 'Enhanced Speed.png',
        durability: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'speed',
        effect_type: 'percentage'
      },{
        name: 'Super Speed',
        tier: 1,
        score: 2,
        description: 'Reduces Mission Time',
        activation_chance: 100,
        effect_bonus: 12.5,
        icon: 'Super Speed.png',
        durability: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'speed',
        effect_type: 'percentage'
      },{
        name: 'Speed Shoes',
        tier: 2,
        score: 2,
        description: 'Reduces Mission Time',
        activation_chance: 100,
        effect_bonus: 17.5,
        icon: 'Speed Shoes.png',
        durability: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'speed',
        effect_type: 'percentage'
      },{
        name: 'Volatile Speed',
        tier: 0,
        score: 1,
        description: 'A Chance to Reduce Mission Time',
        activation_chance: 20,
        effect_bonus: 25,
        icon: 'Volatile Speed.png',
        durability: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'speed',
        effect_type: 'percentage'
      },{
        name: 'Volatile Super Speed',
        tier: 1,
        score: 2,
        description: 'A Chance to Reduce Mission Time',
        activation_chance: 22.5,
        effect_bonus: 25,
        icon: 'Volatile Super Speed.png',
        durability: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'speed',
        effect_type: 'percentage'
      },{
        name: 'Volatile Speed Shoes',
        tier: 2,
        score: 3,
        description: 'A Chance to Reduce Mission Time',
        activation_chance: 25,
        effect_bonus: 33,
        icon: 'Volatile Speed Shoes.png',
        durability: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'speed',
        effect_type: 'percentage'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
