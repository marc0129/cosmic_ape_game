'use strict';

const { Levels } = require('../models/index');

module.exports = {
  async up (queryInterface, Sequelize) {
    await Levels.bulkCreate(
      [
        {
          id: (await Levels.findOne({
            where: {
              level: 0
            }
          })).id,
          lr_bonus: 0,
        },
        {
          id: (await Levels.findOne({
            where: {
              level: 1
            }
          })).id,
          lr_bonus: 0,
        },
        {
          id: (await Levels.findOne({
            where: {
              level: 2
            }
          })).id,
          lr_bonus: 0,
        },
        {
          id: (await Levels.findOne({
            where: {
              level: 3
            }
          })).id,
          lr_bonus: 5,
        },
        {
          id: (await Levels.findOne({
            where: {
              level: 4
            }
          })).id,
          lr_bonus: 5,
        },
        {
          id: (await Levels.findOne({
            where: {
              level: 5
            }
          })).id,
          lr_bonus: 10,
        },
        {
          id: (await Levels.findOne({
            where: {
              level: 6
            }
          })).id,
          lr_bonus: 10,
        },
        {
          id: (await Levels.findOne({
            where: {
              level: 7
            }
          })).id,
          lr_bonus: 15,
        },
        {
          id: (await Levels.findOne({
            where: {
              level: 8
            }
          })).id,
          lr_bonus: 15,
        },
        {
          id: (await Levels.findOne({
            where: {
              level: 9
            }
          })).id,
          lr_bonus: 20,
        },
        {
          id: (await Levels.findOne({
            where: {
              level: 10
            }
          })).id,
          lr_bonus: 20,
        },
        {
          id: (await Levels.findOne({
            where: {
              level: 11
            }
          })).id,
          lr_bonus: 30,
        },
        {
          id: (await Levels.findOne({
            where: {
              level: 12
            }
          })).id,
          lr_bonus: 30,
        },
        {
          id: (await Levels.findOne({
            where: {
              level: 13
            }
          })).id,
          lr_bonus: 40,
        },
        {
          id: (await Levels.findOne({
            where: {
              level: 14
            }
          })).id,
          lr_bonus: 40,
        },
        {
          id: (await Levels.findOne({
            where: {
              level: 15
            }
          })).id,
          lr_bonus: 50,
        },
        {
          id: (await Levels.findOne({
            where: {
              level: 16
            }
          })).id,
          lr_bonus: 50,
        },
        {
          id: (await Levels.findOne({
            where: {
              level: 17
            }
          })).id,
          lr_bonus: 60,
        },
        {
          id: (await Levels.findOne({
            where: {
              level: 18
            }
          })).id,
          lr_bonus: 60,
        },
        {
          id: (await Levels.findOne({
            where: {
              level: 19
            }
          })).id,
          lr_bonus: 75,
        },
        {
          id: (await Levels.findOne({
            where: {
              level: 20
            }
          })).id,
          lr_bonus: 75,
        },
      ],
      {
        updateOnDuplicate: ["lr_bonus"],
      }
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Levels', null, {});
  }
};
