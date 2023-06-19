'use strict';
const { Apes, Items } = require('../models/index')

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Inventories', [
      {
        ape_id: (
          (await Apes.findOne({
            where: {
              name: 'ape 1'
            }
          })).id
        ),
        item_id: (
          (await Items.findAll())[0].id
        ),
        item_durability: (
          (await Items.findAll())[0].durability
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ape_id: (
          (await Apes.findOne({
            where: {
              name: 'ape 1'
            }
          })).id
        ),
        item_id: (
          (await Items.findAll())[0].id
        ),
        item_durability: (
          0
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ape_id: (
          (await Apes.findOne({
            where: {
              name: 'ape 1'
            }
          })).id
        ),
        item_id: (
          (await Items.findAll())[1].id
        ),
        item_durability: (
          (await Items.findAll())[1].durability
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ape_id: (
          (await Apes.findOne({
            where: {
              name: 'ape 2'
            }
          })).id
        ),
        item_id: (
          (await Items.findAll())[1].id
        ),
        item_durability: (
          (await Items.findAll())[1].durability
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ape_id: (
          (await Apes.findOne({
            where: {
              name: 'ape 3'
            }
          })).id
        ),
        item_id: (
          (await Items.findAll())[2].id
        ),
        item_durability: (
          (await Items.findAll())[2].durability
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Inventories', null, {});
  }
};
