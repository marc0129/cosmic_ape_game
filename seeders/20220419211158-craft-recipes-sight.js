'use strict';
const { Items, Resource } = require( '../models/index');

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Craft_Recipes', [
      {
        craftable_id: (
          (await Items.findOne({
            where: {
              name: 'Super Sight'
            }
          })).id
        ),
        ingredient_type: 'item',
        ingredient_id: (
          (await Items.findOne({
            where: {
              name: 'Enhanced Sight'
            }
          })).id
        ),
        ingredient_quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date() 
      },{
        craftable_id: (
          (await Items.findOne({
            where: {
              name: 'Super Sight'
            }
          })).id
        ),
        ingredient_type: 'resource',
        ingredient_id: (
          (await Resource.findOne({
            where: {
              name: 'Cosmic Particles'
            }
          })).id
        ),
        ingredient_quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        craftable_id: (
          (await Items.findOne({
            where: {
              name: 'Sight Goggles'
            }
          })).id
        ),
        ingredient_type: 'item',
        ingredient_id: (
          (await Items.findOne({
            where: {
              name: 'Super Sight'
            }
          })).id
        ),
        ingredient_quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        craftable_id: (
          (await Items.findOne({
            where: {
              name: 'Sight Goggles'
            }
          })).id
        ),
        ingredient_type: 'resource',
        ingredient_id: (
          (await Resource.findOne({
            where: {
              name: 'Cosmic Particles'
            }
          })).id
        ),
        ingredient_quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        craftable_id: (
          (await Items.findOne({
            where: {
              name: 'Sight Goggles'
            }
          })).id
        ),
        ingredient_type: 'resource',
        ingredient_id: (
          (await Resource.findOne({
            where: {
              name: 'Ore'
            }
          })).id
        ),
        ingredient_quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        craftable_id: (
          (await Items.findOne({
            where: {
              name: 'Sight Goggles'
            }
          })).id
        ),
        ingredient_type: 'resource',
        ingredient_id: (
          (await Resource.findOne({
            where: {
              name: 'Wood'
            }
          })).id
        ),
        ingredient_quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        craftable_id: (
          (await Items.findOne({
            where: {
              name: 'Volatile Super Sight'
            }
          })).id
        ),
        ingredient_type: 'item',
        ingredient_id: (
          (await Items.findOne({
            where: {
              name: 'Volatile Sight'
            }
          })).id
        ),
        ingredient_quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date() 
      },{
        craftable_id: (
          (await Items.findOne({
            where: {
              name: 'Volatile Super Sight'
            }
          })).id
        ),
        ingredient_type: 'resource',
        ingredient_id: (
          (await Resource.findOne({
            where: {
              name: 'Cosmic Particles'
            }
          })).id
        ),
        ingredient_quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        craftable_id: (
          (await Items.findOne({
            where: {
              name: 'Volatile Sight Goggles'
            }
          })).id
        ),
        ingredient_type: 'item',
        ingredient_id: (
          (await Items.findOne({
            where: {
              name: 'Volatile Super Sight'
            }
          })).id
        ),
        ingredient_quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        craftable_id: (
          (await Items.findOne({
            where: {
              name: 'Volatile Sight Goggles'
            }
          })).id
        ),
        ingredient_type: 'resource',
        ingredient_id: (
          (await Resource.findOne({
            where: {
              name: 'Cosmic Particles'
            }
          })).id
        ),
        ingredient_quantity: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        craftable_id: (
          (await Items.findOne({
            where: {
              name: 'Volatile Sight Goggles'
            }
          })).id
        ),
        ingredient_type: 'resource',
        ingredient_id: (
          (await Resource.findOne({
            where: {
              name: 'Ore'
            }
          })).id
        ),
        ingredient_quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        craftable_id: (
          (await Items.findOne({
            where: {
              name: 'Volatile Sight Goggles'
            }
          })).id
        ),
        ingredient_type: 'resource',
        ingredient_id: (
          (await Resource.findOne({
            where: {
              name: 'Wood'
            }
          })).id
        ),
        ingredient_quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Craft_Recipes', null, {});
  }
};
