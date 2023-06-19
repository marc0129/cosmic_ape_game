'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Currencies', [
      {
        name: 'Cosmic',
        belongs_to: 'Account',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gold',
        belongs_to: 'Account',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Salvage',
        belongs_to: 'Account',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Stamina',
        belongs_to: 'Character',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Experience',
        belongs_to: 'Character',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
