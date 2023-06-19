'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Apes',
      'level',
      {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      }
    );

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Apes',
      'level'
    );
  }
}
