'use strict';
const { Items, Resource } = require( '../models/index');

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Craft_Recipes', [
      {
        craftable_id: (
          (await Items.findOne({
            where: {
              name: 'Super Strength - Crushing Style'
            }
          })).id
        ),
        ingredient_type: 'item',
        ingredient_id: (
          (await Items.findOne({
            where: {
              name: 'Enhanced Strength - Crushing Style'
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
              name: 'Super Strength - Crushing Style'
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
              name: 'Strength Gauntlets - Crushing Style'
            }
          })).id
        ),
        ingredient_type: 'item',
        ingredient_id: (
          (await Items.findOne({
            where: {
              name: 'Super Strength - Crushing Style'
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
              name: 'Strength Gauntlets - Crushing Style'
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
              name: 'Strength Gauntlets - Crushing Style'
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
        ingredient_quantity: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        craftable_id: (
          (await Items.findOne({
            where: {
              name: 'Strength Gauntlets - Crushing Style'
            }
          })).id
        ),
        ingredient_type: 'resource',
        ingredient_id: (
          (await Resource.findOne({
            where: {
              name: 'Rock'
            }
          })).id
        ),
        ingredient_quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        craftable_id: (
          (await Items.findOne({
            where: {
              name: 'Volatile Super Strength - Crushing Style'
            }
          })).id
        ),
        ingredient_type: 'item',
        ingredient_id: (
          (await Items.findOne({
            where: {
              name: 'Volatile Strength - Crushing Style'
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
              name: 'Volatile Super Strength - Crushing Style'
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
        ingredient_quantity: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        craftable_id: (
          (await Items.findOne({
            where: {
              name: 'Volatile Strength Gauntlets - Crushing Style'
            }
          })).id
        ),
        ingredient_type: 'item',
        ingredient_id: (
          (await Items.findOne({
            where: {
              name: 'Volatile Super Strength - Crushing Style'
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
              name: 'Volatile Strength Gauntlets - Crushing Style'
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
        ingredient_quantity: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        craftable_id: (
          (await Items.findOne({
            where: {
              name: 'Volatile Strength Gauntlets - Crushing Style'
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
        ingredient_quantity: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        craftable_id: (
          (await Items.findOne({
            where: {
              name: 'Volatile Strength Gauntlets - Crushing Style'
            }
          })).id
        ),
        ingredient_type: 'resource',
        ingredient_id: (
          (await Resource.findOne({
            where: {
              name: 'Rock'
            }
          })).id
        ),
        ingredient_quantity: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Craft_Recipes', null, {});
  }
};
