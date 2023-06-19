'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'Account_Transactions',
      'source_of_transaction',
    )
    await queryInterface.addColumn(
      'Account_Transactions',
      'source_of_transaction',
      {
        type: Sequelize.JSON
      },
    )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'Account_Transactions',
      'source_of_transaction',
      {
        type: Sequelize.INTEGER
      },
    )
  }
};
