'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Items', 
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tier: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      durability: {
        type: Sequelize.INTEGER
      },
      activation_chance: {
        type: Sequelize.INTEGER
      },
      effect_bonus: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      icon: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Items');
  }
};
