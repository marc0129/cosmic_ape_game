'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mission_Resource_Rewards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mission_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Missions',
          key: 'id',
        }
      },
      reward_id: {
        type: Sequelize.INTEGER
      },
      reward_type: {
        type: Sequelize.STRING
      },
      reward_description: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      luck: {
        type: Sequelize.DOUBLE
      },
      lowest_amount: {
        type: Sequelize.INTEGER
      },
      highest_amount: {
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
    await queryInterface.dropTable('Mission_Resource_Rewards');
  }
};