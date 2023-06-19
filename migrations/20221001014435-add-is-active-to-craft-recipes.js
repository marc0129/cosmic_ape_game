'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Craft_Recipes',
      'is_active',
      {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      }
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Craft_Recipes',
      'is_active'
    );
  }
};
