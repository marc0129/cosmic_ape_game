'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mission_Histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ape_id: {
        type: Sequelize.INTEGER
      },
      mission_id: {
        type: Sequelize.INTEGER
      },
      level_id: {
        type: Sequelize.INTEGER
      },
      started_at: {
        type: Sequelize.DATE
      },
      ended_at: {
        type: Sequelize.DATE
      },
      duration: {
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
    await queryInterface.dropTable('Mission_Histories');
  }
};