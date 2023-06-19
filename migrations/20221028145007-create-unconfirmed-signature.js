'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Unconfirmed_Signatures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      signature: {
        type: Sequelize.STRING
      },
      confirmed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      address: {
        type: Sequelize.STRING
      },
      unique_ref: {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Unconfirmed_Signatures');
  }
};