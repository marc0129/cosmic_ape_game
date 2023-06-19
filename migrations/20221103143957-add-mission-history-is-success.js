'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Mission_Histories',
        'is_success',
        {
          type: Sequelize.BOOLEAN,
          defaultValue: true
        },
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Mission_Histories', 'is_success'),
    ]);
  }
};
