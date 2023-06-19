'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Mission_Histories',
        'expected_end_time',
        {
          type: Sequelize.DATE,
        },
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Mission_Histories', 'expected_end_time'),
    ]);
  }
};
