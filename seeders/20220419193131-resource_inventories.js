'use strict';
const { Apes, Resource } = require('../models/index')

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Resource_Inventories', [
      {
        ape_id: (
          (await Apes.findOne({
            where: {
              name: 'ape 1'
            }
          })).id
        ),
        resource_id: (
          (await Resource.findAll())[0].id
        ),
        resource_quantity: (
          Math.floor(Math.random() * 10) + 1
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        ape_id: (
          (await Apes.findOne({
            where: {
              name: 'ape 1'
            }
          })).id
        ),
        resource_id: (
          (await Resource.findAll())[1].id
        ),
        resource_quantity: (
          Math.floor(Math.random() * 10) + 1
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        ape_id: (
          (await Apes.findOne({
            where: {
              name: 'ape 1'
            }
          })).id
        ),
        resource_id: (
          (await Resource.findAll())[2].id
        ),
        resource_quantity: (
          Math.floor(Math.random() * 10) + 1
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        ape_id: (
          (await Apes.findOne({
            where: {
              name: 'ape 1'
            }
          })).id
        ),
        resource_id: (
          (await Resource.findAll())[3].id
        ),
        resource_quantity: (
          Math.floor(Math.random() * 10) + 1
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        ape_id: (
          (await Apes.findOne({
            where: {
              name: 'ape 2'
            }
          })).id
        ),
        resource_id: (
          (await Resource.findAll())[0].id
        ),
        resource_quantity: (
          Math.floor(Math.random() * 10) + 1
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        ape_id: (
          (await Apes.findOne({
            where: {
              name: 'ape 2'
            }
          })).id
        ),
        resource_id: (
          (await Resource.findAll())[3].id
        ),
        resource_quantity: (
          Math.floor(Math.random() * 10) + 1
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        ape_id: (
          (await Apes.findOne({
            where: {
              name: 'ape 3'
            }
          })).id
        ),
        resource_id: (
          (await Resource.findAll())[2].id
        ),
        resource_quantity: (
          Math.floor(Math.random() * 10) + 1
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Resource_Inventories', null, {});
  }
};
