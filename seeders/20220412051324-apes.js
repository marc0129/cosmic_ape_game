'use strict';
const { Levels } = require('../models/index')

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Apes', [
      {
        address: '123',
        name: 'ape 1',
        image: '',
        owner: 'harry',
        symbol: 'symbol 1',
        level_id: (
          (await Levels.findOne({
            where: {
              level: 0
            }
          })).id
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
        cp: 0,
      },{
        address: '124',
        name: 'ape 2',
        image: '',
        owner: 'harry',
        symbol: 'symbol 2',
        level_id: (
          (await Levels.findOne({
            where: {
              level: 2
            }
          })).id
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
        cp: 200,
      },{
        address: '125',
        name: 'ape 3',
        image: '',
        owner: 'harry',
        symbol: 'symbol 3',
        level_id: (
          (await Levels.findOne({
            where: {
              level: 4
            }
          })).id
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
        cp: 850,
      },{
        address: '126',
        name: 'ape 4',
        image: '',
        owner: 'harry',
        symbol: 'symbol 4',
        level_id: (
          (await Levels.findOne({
            where: {
              level: 5
            }
          })).id
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
        cp: 1300,
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Apes', null, {});
  }
};
