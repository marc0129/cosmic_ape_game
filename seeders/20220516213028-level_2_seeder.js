'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    var values = [
      [6, 500, 5, 17, 1200, 4],
      [7, 600, 5, 17, 1500, 4],
      [8, 750, 5, 17, 1800, 5],
      [9, 900, 5, 18, 2100, 5],
      [10, 1050, 5, 18, 2200, 6],
      [11, 1100, 10, 18, 2400, 6],
      [12, 1200, 10, 18, 2600, 6],
      [13, 1300, 10, 18, 2800, 7],
      [14, 1400, 10, 19, 3100, 7],
      [15, 1550, 10, 19, 3400, 7],
      [16, 1700, 10, 19, 3700, 8],
      [17, 1850, 10, 19, 4000, 8],
      [18, 2000, 10, 20, 4400, 8],
      [19, 2200, 15, 20, 4800, 8],
      [20, 2400, 15, 20, 5000, 9],
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
