'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Missions',
        'main_branch',
        {
          type: Sequelize.STRING
        },
      ),
      queryInterface.addColumn(
        'Missions',
        'secondary_branch',
        {
          type: Sequelize.STRING
        },
      ),
      queryInterface.addColumn(
        'Missions',
        'tier',
        {
          type: Sequelize.INTEGER,
        },
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn(
        'Missions',
        'main_branch'
      ),
      queryInterface.removeColumn(
        'Missions',
        'secondary_branch'
      ),
      queryInterface.removeColumn(
        'Missions',
        'tier'
      )
    ])
  }
};
