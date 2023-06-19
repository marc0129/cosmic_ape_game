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
          pos_x: 27,
          pos_y: 66,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Rock'
            }
          })).id,
          pos_x: 11,
          pos_y: 16,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Rock and Ore'
            }
          })).id,
          pos_x: 64,
          pos_y: 54,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Wood, Rock, and Food'
            }
          })).id,
          pos_x: 78,
          pos_y: 34,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Cosmic Particles 2'
            }
          })).id,
          pos_x: 69,
          pos_y: 49,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Wood and Food'
            }
          })).id,
          pos_x: 16,
          pos_y: 52,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Wood, Ore, and Food'
            }
          })).id,
          pos_x: 39,
          pos_y: 57,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Cosmic Particles 3'
            }
          })).id,
          pos_x: 43,
          pos_y: 75,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Wood, Rock, Ore, and Food'
            }
          })).id,
          pos_x: 69,
          pos_y: 66,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Wood'
            }
          })).id,
          pos_x: 69,
          pos_y: 33,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Wood and Rock'
            }
          })).id,
          pos_x: 9,
          pos_y: 29,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Food'
            }
          })).id,
          pos_x: 13,
          pos_y: 35,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Rock and Food'
            }
          })).id,
          pos_x: 43,
          pos_y: 46,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Wood, Rock, and Ore'
            }
          })).id,
          pos_x: 9,
          pos_y: 63,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Wood and Ore'
            }
          })).id,
          pos_x: 87,
          pos_y: 57,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Cosmic Particles 4'
            }
          })).id,
          pos_x: 36,
          pos_y: 67,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Ore and Food'
            }
          })).id,
          pos_x: 26,
          pos_y: 44,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Ore'
            }
          })).id,
          pos_x: 81,
          pos_y: 30,
        },
        {
          id: (await Missions.findOne({
            where: {
              name: 'Rock, Ore, and Food'
            }
          })).id,
          pos_x: 57,
          pos_y: 53,
        },
      ],
      {
        updateOnDuplicate: ["pos_x", "pos_y"],
      }
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Missions', null, {});
  }
};
