'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Item_Equippeds',
        'effect',
        {
          type: Sequelize.DOUBLE,
          defaultValue: 1.0,
        },
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Item_Equippeds', 'effect'),
    ]);
  }
};
