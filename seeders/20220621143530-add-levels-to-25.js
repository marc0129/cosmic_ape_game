'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    var values = [
      [21, 2600, 90, 20, 5000, 9],
      [22, 2800, 90, 20, 5000, 9],
      [23, 3000, 105, 20, 5000, 9],
      [24, 3250, 105, 21, 5000, 9],
      [25, 3500, 120, 21, 5000, 9],
    ]

    var bulkLevels = []

    values.map(v => {
      bulkLevels.push({
        level: v[0],
        cp: v[1],
        lr_bonus: v[2],
        inventory: v[3],
        cp_storage: v[4],
        max_equips: v[5],
        createdAt: new Date(),
        updatedAt: new Date()
      })
    })

    return queryInterface.bulkInsert('Levels', bulkLevels);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Levels', null, {});
  }
};
