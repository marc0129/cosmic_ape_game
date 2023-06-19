'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Levels',
        'experience',
        {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
      ),
      queryInterface.addColumn(
        'Levels',
        'stamina',
        {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
      ),
      queryInterface.addColumn(
        'Levels',
        'stamina_refresh_per_hour',
        {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Levels', 'experience'),
      queryInterface.removeColumn('Levels', 'stamina'),
      queryInterface.removeColumn('Levels', 'stamina_refresh_per_hour'),
    ]);
  }
};
