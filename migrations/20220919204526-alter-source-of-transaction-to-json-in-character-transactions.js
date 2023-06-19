'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'Character_Transactions',
      'source_of_transaction'
    )
    await queryInterface.addColumn(
      'Character_Transactions',
      'source_of_transaction',
      {
        type: Sequelize.JSON
      },
    )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'Character_Transactions',
      'source_of_transaction',
      {
        type: Sequelize.INTEGER
      },
    )
  }
};
