'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Levels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      level: {
        type: Sequelize.INTEGER
      },
      cp: {
        type: Sequelize.INTEGER
      },
      lr_bonus: {
        type: Sequelize.INTEGER
      },
      inventory: {
        type: Sequelize.INTEGER
      },
      cp_storage: {
        type: Sequelize.INTEGER
      },
      max_equips: {
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
    await queryInterface.dropTable('Levels');
  }
};