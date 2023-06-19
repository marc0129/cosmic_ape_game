'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Missions',
        'pos_x',
        {
          type: Sequelize.INTEGER
        },
      ),

      queryInterface.addColumn(
        'Missions',
        'pos_y',
        {
          type: Sequelize.INTEGER
        },
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Missions', 'pos_x'),
      queryInterface.removeColumn('Missions', 'pos_y'),
    ]);
  }
};