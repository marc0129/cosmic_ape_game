'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'ShopItems',
        'currency_id',
        {
          type: Sequelize.INTEGER,
          defaultValue: 1,
        },
      ),
      queryInterface.removeColumn('ShopItems', 'type'),
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('ShopItems', 'currency_id'),
      queryInterface.removeColumn('ShopItems', 'type'),
    ]);
  }
};
