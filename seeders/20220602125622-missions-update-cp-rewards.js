'use strict';

const { Missions } = require('../models/index');

module.exports = {
  async up (queryInterface, Sequelize) {
    await Missions.bulkCreate(
      [
        {
          id: (await Missions.findOne({
            where: {
              name: 'Cosmic Particles 1'
            }
          })).id,
          cp_reward: 65,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Cosmic Particles 2'
            }
          })).id,
          cp_reward: 95,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Cosmic Particles 3'
            }
          })).id,
          cp_reward: 125,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Cosmic Particles 4'
            }
          })).id,
          cp_reward: 155,
        },
      ],
      {
        updateOnDuplicate: ["cp_reward"],
      }
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Missions', null, {});
  }
};
