'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'Mission_Histories',
      'duration',
      {
        type: Sequelize.DOUBLE
      },
    )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'Mission_Histories',
      'duration',
      {
        type: Sequelize.INTEGER
      },
    )
  }
};
