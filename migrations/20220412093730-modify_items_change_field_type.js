'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn(
        'Items',
        'activation_chance',
        {
          type: Sequelize.DOUBLE
        },
      ),queryInterface.changeColumn(
        'Items',
        'effect_bonus',
        {
          type: Sequelize.DOUBLE
        },
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn(
        'Items',
        'activation_chance',
        {
          type: Sequelize.INTEGER
        },
      ),queryInterface.changeColumn(
        'Items',
        'effect_bonus',
        {
          type: Sequelize.INTEGER
        },
      )
    ])
  }
};
