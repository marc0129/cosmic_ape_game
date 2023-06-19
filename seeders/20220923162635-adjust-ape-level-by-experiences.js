'use strict';

const csvtojson = require('csvtojson')
const levelsCsvFile = require('../assets/info/levels.csv')
const { Apes, Tier } = require('../models/index');
const getCurrenciesByCharacters = require('../utils/currencies/get-currencies-by-characters');

module.exports = {
  async up (queryInterface, Sequelize) {
    const levelsJson = await csvtojson().fromString(levelsCsvFile)

    const levels = levelsJson.map(level => ({
      level: Number(level['CAC NFT Levels'].slice(6)),
      experience: Number(level['EXP']),
      lr_bonus: Number(level['Luck Bonus']),
      inventory: Number(level['Max Inventory Slots']),
      stamina: Number(level['Stamina']),
    }))

    const tier = await Tier.findOne({
      where: {
        tier: 1
      }
    })

    const tier1Levels = levels.filter(level => level.level <= (tier.max_level || 0)).sort((level1, level2) => level2.level - level1.level)
    const apes = await Apes.findAll()
    const transactions = await getCurrenciesByCharacters({ apes })
    const expApes = apes
                    .map(ape => ({
                      ...ape.dataValues,
                      experience: transactions.find(transaction => transaction.Currency.name === 'Experience' && transaction.character_id === ape.id)?.amount || 0
                    }))
                    .map(ape => ({
                      ...ape,
                      level: tier1Levels.filter(level => (level.experience || 0) <= (ape.experience || 0))[0]?.level || 0
                    }))
    
    const updatedApes = await Apes.bulkCreate(
      expApes.map(ape => ({ id: ape.id, level: ape.level, tier: 1 })),
      {
        updateOnDuplicate: ["level", "tier"],
      }
    )
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
