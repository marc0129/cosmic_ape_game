'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Missions',
      'is_active',
      {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      }
    );

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Missions',
      'is_active'
    );
  }
}
