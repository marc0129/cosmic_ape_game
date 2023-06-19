'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Inventories',
        'experience',
        {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Inventories', 'experience'),
    ]);
  }
};
