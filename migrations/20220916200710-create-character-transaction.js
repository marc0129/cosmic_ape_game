'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Character_Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      character_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Apes',
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
      amount: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      transaction_date: {
        type: Sequelize.DATE
      },
      source_of_transaction: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Transaction_Sources',
          key: 'id',
        }
      },
      audit_fields: {
        type: Sequelize.JSON
      },
      is_settlement: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable('Character_Transactions');
  }
};