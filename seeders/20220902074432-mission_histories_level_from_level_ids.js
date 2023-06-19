'use strict';

const { Mission_Histories, Levels } = require('../models/index');

module.exports = {
  async up (queryInterface, Sequelize) {
    const missionHistories = await Mission_Histories.findAll({
      include: Levels,
    })
    
    await Mission_Histories.bulkCreate(
      missionHistories.map(
        missionHistory => ({
          id: missionHistory.id,
          level: missionHistory.Level.level || 0,
        })
      ),
      {
        updateOnDuplicate: ["level"],
      }
    )
  },

  async down (queryInterface, Sequelize) {
    const missionHistories = await Mission_Histories.findAll()
    
    await Mission_Histories.bulkCreate(
      missionHistories.map(
        missionHistory => ({
          id: missionHistory.id,
          level: 0,
        })
      ),
      {
        updateOnDuplicate: ["level"],
      }
    )
  }
};
