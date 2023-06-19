'use strict';

const { Items } = require('../models/index');

module.exports = {
  async up (queryInterface, Sequelize) {
    await Items.bulkCreate(
      [
        {
          id: (await Items.findOne({
            where: {
              name: 'Speed Shoes'
            }
          })).id,
          score: 3,
        },
        {
          id: (await Items.findOne({
            where: {
              name: 'Perception Amulet'
            }
          })).id,
          score: 3,
        },
        {
          id: (await Items.findOne({
            where: {
              name: 'Sight Goggles'
            }
          })).id,
          score: 3,
        },
        {
          id: (await Items.findOne({
            where: {
              name: 'Strength Gauntlets - Crushing Style'
            }
          })).id,
          score: 3,
        },
        {
          id: (await Items.findOne({
            where: {
              name: 'Strength Gauntlets - Piercing Style'
            }
          })).id,
          score: 3,
        },
        {
          id: (await Items.findOne({
            where: {
              name: 'Strength Gauntlets - Cutting Style'
            }
          })).id,
          score: 3,
        },
        {
          id: (await Items.findOne({
            where: {
              name: 'Agility Shoes'
            }
          })).id,
          score: 3,
        },
        {
          id: (await Items.findOne({
            where: {
              name: 'Lucky Stew'
            }
          })).id,
          score: 3,
        },
      ],
      {
        updateOnDuplicate: ["score"],
      }
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
