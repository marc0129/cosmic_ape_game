'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Item_Equippeds',
        'type',
        {
          type: Sequelize.STRING,
          defaultValue: 'item'
        },
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Item_Equippeds', 'type'),
    ]);
  }
};
