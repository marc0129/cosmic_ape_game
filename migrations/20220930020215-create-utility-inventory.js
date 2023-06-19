'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Utility_Inventories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ape_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Apes',
          key: 'id',
        }
      },
      utility_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Utilities',
          key: 'id',
        }
      },
      utility_quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      utility_durability: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
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
    await queryInterface.dropTable('Utility_Inventories');
  }
};