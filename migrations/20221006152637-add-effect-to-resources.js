'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Resources',
      'effect',
      {
        type: Sequelize.JSON,
        defaultValue: {},
      }
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Resources',
      'effect'
    );
  }
};
