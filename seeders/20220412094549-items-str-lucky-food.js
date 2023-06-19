'use strict';

// Speed Items

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Items', [
      {
        name: 'Salad Surprise',
        tier: 0,
        score: 1,
        description: 'Increases Expedition Mission Luck Rate',
        activation_chance: 100,
        effect_bonus: 500,
        icon: 'Salad Surprise.png',
        durability: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'lucky-food',
        effect_type: 'static'
      },{
        name: 'Clover Porridge',
        tier: 1,
        score: 2,
        description: 'Increases Expedition Mission Luck Rate',
        activation_chance: 100,
        effect_bonus: 550,
        icon: 'Clover Porridge.png',
        durability: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'lucky-food',
        effect_type: 'static'
      },{
        name: 'Lucky Stew',
        tier: 2,
        score: 2,
        description: 'Increases Expedition Mission Luck Rate',
        activation_chance: 100,
        effect_bonus: 650,
        icon: 'Lucky Stew.png',
        durability: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'lucky-food',
        effect_type: 'static'
      },{
        name: 'Tainted Salad Surprise',
        tier: 0,
        score: 1,
        description: 'A Chance to Increase Expedition Mission Luck Rate',
        activation_chance: 20,
        effect_bonus: 1000,
        icon: 'Tainted Salad Surprise.png',
        durability: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'lucky-food',
        effect_type: 'static'
      },{
        name: 'Tainted Clover Porridge',
        tier: 1,
        score: 2,
        description: 'A Chance to Increase Expedition Mission Luck Rate',
        activation_chance: 22.5,
        effect_bonus: 1000,
        icon: 'Tainted Clover Porridge.png',
        durability: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'lucky-food',
        effect_type: 'static'
      },{
        name: 'Tainted Lucky Stew',
        tier: 2,
        score: 3,
        description: 'A Chance to Increase Expedition Mission Luck Rate',
        activation_chance: 25,
        effect_bonus: 1500,
        icon: 'Tainted Lucky Stew.png',
        durability: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'lucky-food',
        effect_type: 'static'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
