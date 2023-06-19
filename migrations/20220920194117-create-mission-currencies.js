'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mission_Currencies', {
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
      currency_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Currencies',
          key: 'id',
        }
      },
      lowest_amount: {
        type: Sequelize.DOUBLE,
      },
      highest_amount: {
        type: Sequelize.DOUBLE,
      },
      type: {
        type: Sequelize.STRING,
        defaultValue: 'reward'
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
    await queryInterface.dropTable('Mission_Currencies');
  }
};