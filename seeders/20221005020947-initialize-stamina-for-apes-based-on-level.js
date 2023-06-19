'use strict';
const csvtojson = require('csvtojson')
const levelsCsvFile = require('../assets/info/levels.csv')
const { Apes, Character_Transaction, Currency } = require('../models/index')
const { TRANSACTION_INITIALIZE_STAMINA_FROM_LEVEL } = require('../static/transaction-types')

module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date()

    const levelsJson = await csvtojson().fromString(levelsCsvFile)

    const levels = levelsJson.map(level => ({
      level: Number(level['CAC NFT Levels'].slice(6)),
      experience: Number(level['EXP']),
      lr_bonus: Number(level['Luck Bonus']),
      inventory: Number(level['Max Inventory Slots']),
      stamina: Number(level['Stamina']),
    }))

    console.log('Getting stamina currency')
    const stamina = await Currency.findOne({
      where: {
        name: 'Stamina'
      },
    })
    console.log('Got stamina currency')

    console.log('Getting all apes')
    const apes = await Apes.findAll()
    console.log('Got all apes')

    console.log('Creating stamina transactions')
    Character_Transaction.bulkCreate(
      apes.map(ape => ({
        character_id: ape.id,
        currency_id: stamina.id,
        amount: levels.find(level => level.level === ape.level).stamina,
        transaction_date: now,
        source_of_transaction: {
          type: TRANSACTION_INITIALIZE_STAMINA_FROM_LEVEL,
          character_id: ape.id,
          owner_address: ape.owner,
          level: ape.level,
        },
        audit_fields: {
          transaction_date: now,
        },
        is_settlement: false,
      }))
    )
    console.log('Created all stamina transactions')
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
