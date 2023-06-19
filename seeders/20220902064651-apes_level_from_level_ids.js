'use strict';

const { Apes, Levels } = require('../models/index');

module.exports = {
  async up (queryInterface, Sequelize) {
    const apes = await Apes.findAll({
      include: Levels,
    })
    
    await Apes.bulkCreate(
      apes.map(
        ape => ({
          id: ape.id,
          level: ape.Level.level || 0,
        })
      ),
      {
        updateOnDuplicate: ["level"],
      }
    )
  },

  async down (queryInterface, Sequelize) {
    const apes = await Apes.findAll()
    
    await Apes.bulkCreate(
      apes.map(
        ape => ({
          id: ape.id,
          level: 0,
        })
      ),
      {
        updateOnDuplicate: ["level"],
      }
    )
  }
};
