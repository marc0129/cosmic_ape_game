'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tiers', [
      {
        tier: 7,
        max_level: 90,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        tier: 8,
        max_level: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tiers', null, {});
  }
};
