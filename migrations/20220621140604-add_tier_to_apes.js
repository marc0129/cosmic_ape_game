'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Apes',
        'tier',
        {
          type: Sequelize.INTEGER,
          defaultValue: 1,
        },
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Apes', 'tier'),
    ]);
  }
};
