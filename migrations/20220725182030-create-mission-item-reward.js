'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mission_Item_Rewards', {
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
      item_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Items',
          key: 'id',
        }
      },
      name: {
        type: Sequelize.STRING
      },
      luck: {
        type: Sequelize.DOUBLE,
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
    await queryInterface.dropTable('Mission_Item_Rewards');
  }
};