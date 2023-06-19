'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Apes',
      'last_stamina_date',
      {
        type: Sequelize.DATE,
      }
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Apes',
      'last_stamina_date'
    );
  }
};
