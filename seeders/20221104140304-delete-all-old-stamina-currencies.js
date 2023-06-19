'use strict';
const {
  Currency,
  Character_Transaction,
} = require("../models/index");

module.exports = {
  async up (queryInterface, Sequelize) {
    const stamina = await Currency.findOne({
      where: {
        name: 'Stamina'
      }
    })
    
    await Character_Transaction.destroy({
      where: {
        currency_id: stamina.id,
      },
    })

  },

  async down (queryInterface, Sequelize) {

  }
};
