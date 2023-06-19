'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Default_Item_Equips',
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
      queryInterface.removeColumn('Default_Item_Equips', 'type'),
    ]);
  }
};
