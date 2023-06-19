'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Craft_Recipes',
        'craftable_tier',
        {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Craft_Recipes', 'craftable_tier'),
    ]);
  }
};
