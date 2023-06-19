'use strict'
const { Resource, Utility } = require('../models/index')

module.exports = {
  async up(queryInterface, Sequelize) {
    const resources = await Resource.findAll()
    const utilities = await Utility.findAll()

    await queryInterface.bulkDelete('ShopItems', null, {});

    await queryInterface.bulkInsert(
      'ShopItems',
      [
        {
          resource_id: resources.find(
            (resource) => resource.name === 'Random Tier 1 Legendary Item Chest',
          ).id,
          utility_id: null,
          daily_amount: null,
          weekly_amount: null,
          monthly_amount: 1,
          cost: 150,
          currency_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          resource_id: resources.find(
            (resource) => resource.name === 'Random Tier 2 Legendary Item Chest',
          ).id,
          utility_id: null,
          daily_amount: null,
          weekly_amount: null,
          monthly_amount: 1,
          cost: 250,
          currency_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          resource_id: resources.find(
            (resource) => resource.name === 'Random Tier 3 Legendary Item Chest',
          ).id,
          utility_id: null,
          daily_amount: null,
          weekly_amount: null,
          monthly_amount: 1,
          cost: 480,
          currency_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          resource_id: null,
          utility_id: utilities.find(
            (utility) => utility.name === 'Mysterious Key 1',
          ).id,
          daily_amount: null,
          weekly_amount: null,
          monthly_amount: 1,
          cost: 100,
          currency_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          resource_id: null,
          utility_id: utilities.find(
            (utility) => utility.name === 'Mysterious Key 2',
          ).id,
          daily_amount: null,
          weekly_amount: null,
          monthly_amount: 1,
          cost: 100,
          currency_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          resource_id: null,
          utility_id: utilities.find(
            (utility) => utility.name === 'Mysterious Key 3',
          ).id,
          daily_amount: null,
          weekly_amount: null,
          monthly_amount: 1,
          cost: 100,
          currency_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          resource_id: null,
          utility_id: utilities.find(
            (utility) => utility.name === 'Mysterious Key 4',
          ).id,
          daily_amount: null,
          weekly_amount: null,
          monthly_amount: 1,
          cost: 100,
          currency_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          resource_id: resources.find(
            (resource) => resource.name === 'Max Repair Hammer',
          ).id,
          utility_id: null,
          daily_amount: null,
          weekly_amount: 1,
          monthly_amount: null,
          cost: 900,
          currency_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          resource_id: resources.find(
            (resource) => resource.name === '50% Repair Hammer',
          ).id,
          utility_id: null,
          daily_amount: null,
          weekly_amount: 1,
          monthly_amount: null,
          cost: 500,
          currency_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          resource_id: resources.find(
            (resource) => resource.name === '20% Repair Hammer',
          ).id,
          utility_id: null,
          daily_amount: null,
          weekly_amount: 5,
          monthly_amount: null,
          cost: 250,
          currency_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          resource_id: resources.find(
            (resource) => resource.name === '10% Repair Hammer',
          ).id,
          utility_id: null,
          daily_amount: null,
          weekly_amount: 5,
          monthly_amount: null,
          cost: 150,
          currency_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          resource_id: resources.find(
            (resource) => resource.name === 'Prisma Ore',
          ).id,
          utility_id: null,
          daily_amount: 10,
          weekly_amount: null,
          monthly_amount: null,
          cost: 500,
          currency_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          resource_id: resources.find(
            (resource) => resource.name === 'Ganrei Rock',
          ).id,
          utility_id: null,
          daily_amount: 10,
          weekly_amount: null,
          monthly_amount: null,
          cost: 500,
          currency_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          resource_id: resources.find(
            (resource) => resource.name === 'Rushmooms',
          ).id,
          utility_id: null,
          daily_amount: 10,
          weekly_amount: null,
          monthly_amount: null,
          cost: 500,
          currency_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          resource_id: resources.find(
            (resource) => resource.name === 'Koa Wood',
          ).id,
          utility_id: null,
          daily_amount: 10,
          weekly_amount: null,
          monthly_amount: null,
          cost: 500,
          currency_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ShopItems', null, {});
  },
}
