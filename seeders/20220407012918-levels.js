'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Levels', [
      {
        level: 0,
        cp: 0,
        lr_bonus: 0,
        max_equips: 2,
        cp_storage: 300,
        inventory: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        level: 1,
        cp: 150,
        lr_bonus: 0,
        max_equips: 2,
        cp_storage: 400,
        inventory: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        level: 2,
        cp: 200,
        lr_bonus: 0,
        max_equips: 3,
        cp_storage: 500,
        inventory: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        level: 3,
        cp: 250,
        lr_bonus: 5,
        max_equips: 3,
        cp_storage: 600,
        inventory: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        level: 4,
        cp: 300,
        lr_bonus: 5,
        max_equips: 3,
        cp_storage: 800,
        inventory: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        level: 5,
        cp: 400,
        lr_bonus: 10,
        max_equips: 4,
        cp_storage: 1000,
        inventory: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Levels', null, {});
  }
};
