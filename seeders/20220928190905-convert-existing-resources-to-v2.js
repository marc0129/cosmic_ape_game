'use strict';

const {
  Resource,
} = require("../models/index");

module.exports = {
  async up (queryInterface, Sequelize) {
    const resources = await Resource.findAll()
    const now = new Date()

    const updatedResources = await Resource.bulkCreate([
      {
        id: resources.find(resource => resource.name === '$COSMIC').id,
        name: 'Old Cosmic',
        is_active: false,
        updatedAt: now,
      },
      {
        id: resources.find(resource => resource.name === 'Cosmic Particles').id,
        name: 'Old CP',
        is_active: false,
        updatedAt: now,
      },
      {
        id: resources.find(resource => resource.name === 'Wood').id,
        name: 'Koa Wood',
        type: 'Resource',
        rarity: 'Common',
        description: 'Wood Crafting Material',
        stack: 999,
        gold: 50,
        salvage: 1,
        icon: 'Koa_Wood.png',
        is_active: true,
        updatedAt: now,
      },
      {
        id: resources.find(resource => resource.name === 'Ore').id,
        name: 'Prisma Ore',
        type: 'Resource',
        rarity: 'Common',
        description: 'Ore Crafting Material',
        stack: 999,
        gold: 50,
        salvage: 1,
        icon: 'Prisma_Ore.png',
        is_active: true,
        updatedAt: now,
      },
      {
        id: resources.find(resource => resource.name === 'Rock').id,
        name: 'Ganrei Rock',
        type: 'Resource',
        rarity: 'Common',
        description: 'Rock Crafting Material',
        stack: 999,
        gold: 50,
        salvage: 1,
        icon: 'Ganrei_Rock.png',
        is_active: true,
        updatedAt: now,
      },
      {
        id: resources.find(resource => resource.name === 'Food').id,
        name: 'Rushmooms',
        type: 'Resource',
        rarity: 'Common',
        description: 'Food Crafting Material',
        stack: 999,
        gold: 50,
        salvage: 1,
        icon: 'Rushmooms.png',
        is_active: true,
        updatedAt: now,
      }
    ], {
      updateOnDuplicate: ['name', 'type', 'rarity', 'description', 'stack', 'gold', 'salvage', 'icon', 'is_active', 'updatedAt'],
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
