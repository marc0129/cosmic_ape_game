'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Apes',
      'is_favorited',
      {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }
    );

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Apes',
      'is_favorited'
    );
  }
}
