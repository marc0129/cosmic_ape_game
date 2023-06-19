'use strict';

const {
  Items,
} = require("../models/index");

module.exports = {
  async up (queryInterface, Sequelize) {
    const items = await Items.findAll({
      where: {
        type: 'Legendary Equipment'
      }
    })

    const gxps = [0, 150, 250, 400, 600, 850, 1150, 1550, 2000]
    
    await Items.bulkCreate(items.map(item => ({
      id: item.id,
      gxp: gxps[item.tier || 0]
    })), {
      updateOnDuplicate: ['gxp'],
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
