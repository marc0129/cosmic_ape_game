'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Mission_Histories',
      'level',
      {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      }
    );

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Mission_Histories',
      'level'
    );
  }
}
