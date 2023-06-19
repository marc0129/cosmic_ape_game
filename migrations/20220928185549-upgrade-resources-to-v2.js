'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Resources',
        'type',
        {
          type: Sequelize.STRING,
          defaultValue: 'Resource',
        },
      ),
      queryInterface.addColumn(
        'Resources',
        'rarity',
        {
          type: Sequelize.STRING,
          defaultValue: 'Common',
        },
      ),
      queryInterface.addColumn(
        'Resources',
        'stack',
        {
          type: Sequelize.INTEGER,
          defaultValue: 999,
        },
      ),
      queryInterface.addColumn(
        'Resources',
        'gold',
        {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
      ),
      queryInterface.addColumn(
        'Resources',
        'salvage',
        {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
      ),
      queryInterface.addColumn(
        'Resources',
        'tier',
        {
          type: Sequelize.INTEGER,
        },
      ),
      queryInterface.addColumn(
        'Resources',
        'is_active',
        {
          type: Sequelize.BOOLEAN,
          defaultValue: true,
        },
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn(
        'Resources',
        'type'
      ),
      queryInterface.removeColumn(
        'Resources',
        'rarity'
      ),
      queryInterface.removeColumn(
        'Resources',
        'stack'
      ),
      queryInterface.removeColumn(
        'Resources',
        'salvage'
      ),
      queryInterface.removeColumn(
        'Resources',
        'gold'
      ),
      queryInterface.removeColumn(
        'Resources',
        'tier'
      ),
      queryInterface.removeColumn(
        'Resources',
        'is_active'
      )
    ])
  }
};
