'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date()
    if (!process.env.COSMIC_GAME_WALLET_ADDRESS) {
      throw new Error('COSMIC_GAME_WALLET_ADDRESS should be existed in env file')
    }

    return queryInterface.bulkInsert('Bank_Channels', [
      {
        name: 'withdraw_holding',
        currency: 'Cosmic',
        public_wallet_address: process.env.COSMIC_GAME_WALLET_ADDRESS,
        is_external: false,
        is_active: true,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'deposit_holding',
        currency: 'Cosmic',
        public_wallet_address: process.env.COSMIC_GAME_WALLET_ADDRESS,
        is_external: false,
        is_active: true,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'COSMIC_GAME_WALLET',
        currency: 'Cosmic',
        public_wallet_address: process.env.COSMIC_GAME_WALLET_ADDRESS,
        is_external: true,
        is_active: true,
        createdAt: now,
        updatedAt: now
      },
    ]);
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
