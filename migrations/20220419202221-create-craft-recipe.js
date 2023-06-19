'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Craft_Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      craftable_id: {
        type: Sequelize.INTEGER
      },
      ingredient_type: {
        type: Sequelize.STRING
      },
      ingredient_id: {
        type: Sequelize.INTEGER
      },
      ingredient_quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Craft_Recipes');
  }
};