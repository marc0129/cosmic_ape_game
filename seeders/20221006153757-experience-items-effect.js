'use strict';

const {
  Resource,
} = require("../models/index");

module.exports = {
  async up (queryInterface, Sequelize) {
    const resources = await Resource.findAll({
      where: {
        type: 'Resource: Level-Up Material'
      }
    })
    const exps = [
      {
        tier: 1,
        experience: 250
      }, {
        tier: 2,
        experience: 625
      }, {
        tier: 3,
        experience: 1563
      }, {
        tier: 4,
        experience: 3906
      }, {
        tier: 5,
        experience: 9766
      }, {
        tier: 6,
        experience: 24414
      }, 
    ]
    await Resource.bulkCreate(resources.map(resource => ({
      id: resource.id,
      effect: {
        experience: exps.find(exp => exp.tier === resource.tier)?.experience || 0
      }
    })), {
      updateOnDuplicate: ['effect'],
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
