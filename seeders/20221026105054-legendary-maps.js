'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date()

    await queryInterface.bulkInsert('Maps', [
      {
        name: 'Iridian River',
        biome_img: 'biome_tlcol.jpg',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Iridian Village',
        biome_img: 'biome_cf.jpg',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Rainfall Village',
        biome_img: 'biome_a.jpg',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Evergreen Village',
        biome_img: 'biome_pv.jpg',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Waterfall Village',
        biome_img: 'biome_cv.jpg',
        createdAt: now,
        updatedAt: now,
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
