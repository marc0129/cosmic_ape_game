'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Levels', [
      {
        level: 21,
        cp: 2600,
        lr_bonus: 90,
        max_equips: 9,
        cp_storage: 5400,
        inventory: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        level: 22,
        cp: 2800,
        lr_bonus: 90,
        max_equips: 9,
        cp_storage: 5800,
        inventory: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        level: 23,
        cp: 3050,
        lr_bonus: 105,
        max_equips: 9,
        cp_storage: 6300,
        inventory: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        level: 24,
        cp: 3300,
        lr_bonus: 105,
        max_equips: 9,
        cp_storage: 6800,
        inventory: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        level: 25,
        cp: 3550,
        lr_bonus: 120,
        max_equips: 9,
        cp_storage: 7300,
        inventory: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Levels', null, {});
  }
};
