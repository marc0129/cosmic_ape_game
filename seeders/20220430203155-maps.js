'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Maps', [
      {
        name: "THE LOST CITY OF LASOL",
        pos_x: 527,
        pos_y: 87,
        biome_img: "biome_tlcol.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "CRYSTAL FOREST",
        pos_x: 162,
        pos_y: 493,
        biome_img: "biome_cf.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "AZULHENGE",
        pos_x: 415,
        pos_y: 695,
        biome_img: "biome_a.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "PRISM VALLEY",
        pos_x: 855,
        pos_y: 471,
        biome_img: "biome_pv.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "COSMIC VILLAGE",
        pos_x: 467,
        pos_y: 376,
        biome_img: "biome_cv.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Maps', null, {});
  }
};
