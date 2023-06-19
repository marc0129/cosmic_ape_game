'use strict';

const { Items } = require('../models/index');

module.exports = {
  async up (queryInterface, Sequelize) {
    await Items.bulkCreate(
      [
        {
          id: (await Items.findOne({
            where: {
              name: 'Super Perception'
            }
          })).id,
          name: 'Clairvoyant Perception',
        },
        {
          id: (await Items.findOne({
            where: {
              name: 'Volatile Super Perception'
            }
          })).id,
          name: 'Volatile Clairvoyant Perception',
        },
      ],
      {
        updateOnDuplicate: ["name"],
      }
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
