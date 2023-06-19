'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date()

    await queryInterface.bulkInsert('Resources', [
      {
        name: 'Cosmic Artifact',
        type: 'Resource: Evolution Material',
        rarity: 'Rare',
        description: 'Evolving Characters',
        stack: 999,
        gold: 600,
        icon: 'Cosmic_Artifact.png',
        createdAt: now,
        updatedAt: now,
      }
    ])
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
