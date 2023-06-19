'use strict';
const { Op } = require('sequelize');
const { Account, Account_Transaction, Character_Transaction, Apes, Currency, sequelize } = require('../models/index');
const { TRANSACTION_CP_MIGRATION } = require('../static/transaction-types');

module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date()

    try {
      await sequelize.transaction(async transaction => {
        console.log('Getting experience currency')
        const exp = await Currency.findOne({
          where: {
            name: 'Experience'
          },
          transaction
        })
        console.log('Getting gold currency')
        const gold = await Currency.findOne({
          where: {
            name: 'Gold'
          },
          transaction
        })
    
        console.log('Experience = ', exp)
        console.log('Gold = ', gold)

        console.log('Getting all apes')
        let apes = await Apes.findAll({
          transaction
        })
        console.log(`Got ${apes.length} apes`)

        const ownerAddresses = apes.map(ape => ape.owner)
        const existingAccounts = await Account.findAll({
          where: {
            address: {
              [Op.in]: ownerAddresses
            }
          },
          transaction
        })
        const existingAddresses = existingAccounts.map(account => account.address)
        const creatingAddresses = [...new Set(ownerAddresses.filter(address => !existingAddresses.includes(address)))]
        const createdAccounts = await Account.bulkCreate(creatingAddresses.map(
          address => ({
            address,
            experience: 0
          })
        ), { transaction })
        console.log(`bulk-created ${createdAccounts.length} accounts for addresses - ${creatingAddresses.join(', ')}`)
    
        console.log('Getting all apes with Account')
        apes = await Apes.findAll({
          include: Account,
          transaction
        })
        console.log(`Got ${apes.length} apes`)

        const expValues = apes.map(ape => ({
          character_id: ape.id,
          currency_id: exp.id,
          amount: (ape.cp || 0) * 2,
          transaction_date: now,
          source_of_transaction: {
            type: TRANSACTION_CP_MIGRATION,
            character_id: ape.id,
            account_id: ape.Account.id,
            cp: ape.cp || 0,
          },
          audit_fields: {
            transaction_date: now,
            cp: ape.cp || 0,
          },
          is_settlement: false,
        }))

        const goldValues = apes.map(ape => ({
          account_id: ape.Account.id,
          currency_id: gold.id,
          amount: (ape.cp || 0) * 4,
          transaction_date: now,
          source_of_transaction: {
            type: TRANSACTION_CP_MIGRATION,
            character_id: ape.id,
            account_id: ape.Account.id,
            cp: ape.cp || 0,
          },
          audit_fields: {
            transaction_date: now,
            cp: ape.cp || 0,
          },
          is_settlement: false,
        }))
        console.log(`Started to add records to transactions`)

        const goldTransactions = await Account_Transaction.bulkCreate(goldValues, { transaction })
        const expTransactions = await Character_Transaction.bulkCreate(expValues, { transaction })
        console.log(`Added ${goldTransactions.length + expTransactions.length} records to transactions`)
      })
    } catch (err) {
      console.log(`Unable to migrate cp and rolling back - ${err}`)
    }
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
