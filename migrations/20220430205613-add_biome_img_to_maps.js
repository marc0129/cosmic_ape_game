'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Maps',
        'biome_img',
        {
          type: Sequelize.STRING,
        },
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Maps', 'biome_img'),
    ]);
  }
};
