'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Missions',
        'map_id',
        {
          type: Sequelize.INTEGER,
        },
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Missions', 'map_id'),
    ]);
  }
};
