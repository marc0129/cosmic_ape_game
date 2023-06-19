'use strict';

// Speed Items

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Items', [
      {
        name: 'Enhanced Strength - Piercing Style',
        tier: 0,
        score: 1,
        description: 'Increases Ore Gathering',
        activation_chance: 100,
        effect_bonus: 2,
        icon: 'Enhanced Strength - Piercing Style.png',
        durability: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'str-piercing',
        effect_type: 'static'
      },{
        name: 'Super Strength - Piercing Style',
        tier: 1,
        score: 2,
        description: 'Increases Ore Gathering',
        activation_chance: 100,
        effect_bonus: 3,
        icon: 'Super Strength - Piercing Style.png',
        durability: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'str-piercing',
        effect_type: 'static'
      },{
        name: 'Strength Gauntlets - Piercing Style',
        tier: 2,
        score: 2,
        description: 'Increases Ore Gathering',
        activation_chance: 100,
        effect_bonus: 5,
        icon: 'Strength Gauntlets - Piercing Style.png',
        durability: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'str-piercing',
        effect_type: 'static'
      },{
        name: 'Volatile Strength - Piercing Style',
        tier: 0,
        score: 1,
        description: 'A Chance to Increase Ore Gathering',
        activation_chance: 20,
        effect_bonus: 6,
        icon: 'Volatile Strength - Piercing Style.png',
        durability: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'str-piercing',
        effect_type: 'static'
      },{
        name: 'Volatile Super Strength - Piercing Style',
        tier: 1,
        score: 2,
        description: 'A Chance to Increase Ore Gathering',
        activation_chance: 22.5,
        effect_bonus: 9,
        icon: 'Volatile Super Strength - Piercing Style.png',
        durability: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'str-piercing',
        effect_type: 'static'
      },{
        name: 'Volatile Strength Gauntlets - Piercing Style',
        tier: 2,
        score: 3,
        description: 'A Chance to Increase Ore Gathering',
        activation_chance: 25,
        effect_bonus: 12,
        icon: 'Volatile Strength Gauntlets - Piercing Style.png',
        durability: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'str-piercing',
        effect_type: 'static'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
