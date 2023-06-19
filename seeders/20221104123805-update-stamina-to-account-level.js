'use strict';
const {
  Currency,
} = require("../models/index");

module.exports = {
  async up (queryInterface, Sequelize) {
    const stamina = await Currency.findOne({
      where: {
        name: 'Stamina'
      }
    })

    stamina.set({
      belongs_to: 'Account'
    })

    await stamina.save()
  },

  async down (queryInterface, Sequelize) {
    const stamina = await Currency.findOne({
      where: {
        name: 'Stamina'
      }
    })

    stamina.set({
      belongs_to: 'Character'
    })

    await stamina.save()
  }
};
