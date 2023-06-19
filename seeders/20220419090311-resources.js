'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Resources', [
      {
        name: '$COSMIC',
        description: 'Premium Currency/Ecosystem Token',
        icon: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Cosmic Particles',
        description: 'Freemium Currency, Stamina, and EXP',
        icon: 'cp.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Wood',
        description: 'Crafting Material',
        icon: 'wood.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Ore',
        description: 'Crafting Material',
        icon: 'ore.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Rock',
        description: 'Crafting Material',
        icon: 'rock.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Food',
        description: 'Crafting Material',
        icon: 'food.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Resources', null, {});
  }
};
