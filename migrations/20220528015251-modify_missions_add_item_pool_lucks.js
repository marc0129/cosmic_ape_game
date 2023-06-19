'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Missions',
        'item_luck_1',
        {
          type: Sequelize.DOUBLE,
          defaultValue: 0,
        },
      ),
      queryInterface.addColumn(
        'Missions',
        'item_luck_2',
        {
          type: Sequelize.DOUBLE,
          defaultValue: 0,
        },
      ),
      queryInterface.addColumn(
        'Missions',
        'item_luck_3',
        {
          type: Sequelize.DOUBLE,
          defaultValue: 0,
        },
      ),
      queryInterface.addColumn(
        'Missions',
        'item_luck_4',
        {
          type: Sequelize.DOUBLE,
          defaultValue: 0,
        },
      ),
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Missions', 'item_luck_1'),
      queryInterface.removeColumn('Missions', 'item_luck_2'),
      queryInterface.removeColumn('Missions', 'item_luck_3'),
      queryInterface.removeColumn('Missions', 'item_luck_4'),
    ]);
  }
};
