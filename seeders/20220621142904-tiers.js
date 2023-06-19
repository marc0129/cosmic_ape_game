'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tiers', [
      {
        tier: 1,
        max_level: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        tier: 2,
        max_level: 45,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        tier: 3,
        max_level: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        tier: 4,
        max_level: 70,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        tier: 5,
        max_level: 75,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        tier: 6,
        max_level: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tiers', null, {});
  }
};
