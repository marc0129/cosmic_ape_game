'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Item_Equippeds',
        'is_active',
        {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Item_Equippeds', 'is_active'),
    ]);
  }
};
