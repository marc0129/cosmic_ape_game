'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Missions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      cp_cost: {
        type: Sequelize.INTEGER
      },
      time: {
        type: Sequelize.INTEGER
      },
      cp_reward: {
        type: Sequelize.INTEGER
      },
      cp_hour: {
        type: Sequelize.DOUBLE
      },
      resource_reward: {
        type: Sequelize.STRING
      },
      resource_avg_reward: {
        type: Sequelize.INTEGER
      },
      resource_avg_hour: {
        type: Sequelize.DOUBLE
      },
      item_pool_1: {
        type: Sequelize.INTEGER
      },
      item_pool_2: {
        type: Sequelize.INTEGER
      },
      item_pool_3: {
        type: Sequelize.INTEGER
      },
      item_pool_4: {
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
    await queryInterface.dropTable('Missions');
  }
};