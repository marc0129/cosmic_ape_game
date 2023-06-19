'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ShopItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      resource_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Resources',
          key: 'id',
        }
      },
      utility_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Utilities',
          key: 'id',
        }
      },
      daily_amount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      weekly_amount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      monthly_amount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      cost: {
        type: Sequelize.DOUBLE
      }, 
      type: {
        type: Sequelize.STRING,
        allowNull: false,
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('ShopItems');
  }
};
