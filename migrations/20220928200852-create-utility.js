'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Utilities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      rarity: {
        type: Sequelize.STRING
      },
      durability: {
        type: Sequelize.INTEGER
      },
      effect_description: {
        type: Sequelize.STRING
      },
      stack: {
        type: Sequelize.INTEGER
      },
      key: {
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.STRING
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      luck_rate_bonus: {
        type: Sequelize.INTEGER
      },
      gold_gain_bonus: {
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
    await queryInterface.dropTable('Utilities');
  }
};