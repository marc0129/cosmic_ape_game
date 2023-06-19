'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Apes',
        'current_level_cp',
        {
          type: Sequelize.INTEGER
        },
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Apes', 'current_level_cp'),
    ]);
  }
};
