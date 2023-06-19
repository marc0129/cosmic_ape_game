'use strict';
const { Missions } = require('../models/index')

module.exports = {
  async up (queryInterface, Sequelize) {
    const missions = await Missions.findAll()
    const rewards = []

    missions.forEach(mission => {
      for (let i = 1; i <= 4; i ++) {
        if (typeof mission[`item_pool_${i}`] === 'number') {
          rewards.push({
            mission_id: mission.id,
            item_id: mission[`item_pool_${i}`],
            luck: mission[`item_luck_${i}`] || 0,
            name: `item${i}`,
            createdAt: new Date(),
            updatedAt: new Date()
          })
        }
      }
    })
    
    return queryInterface.bulkInsert('Mission_Item_Rewards', rewards);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Mission_Item_Rewards', null, {});
  }
};
