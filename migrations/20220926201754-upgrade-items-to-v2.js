'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Items',
        'type',
        {
          type: Sequelize.STRING,
          defaultValue: 'Equipment',
        },
      ),
      queryInterface.addColumn(
        'Items',
        'rarity',
        {
          type: Sequelize.STRING,
          defaultValue: 'Common',
        },
      ),
      queryInterface.addColumn(
        'Items',
        'experience',
        {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
      ),
      queryInterface.addColumn(
        'Items',
        'salvage',
        {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
      ),
      queryInterface.addColumn(
        'Items',
        'gold',
        {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn(
        'Items',
        'type'
      ),
      queryInterface.removeColumn(
        'Items',
        'rarity'
      ),
      queryInterface.removeColumn(
        'Items',
        'experience'
      ),
      queryInterface.removeColumn(
        'Items',
        'salvage'
      ),
      queryInterface.removeColumn(
        'Items',
        'gold'
      )
    ])
  }
};
