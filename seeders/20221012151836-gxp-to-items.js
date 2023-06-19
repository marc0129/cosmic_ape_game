const {
  Items,
} = require("../models/index");

module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date()

    const items = await Items.findAll()
    await Items.bulkCreate(items.map(
      item => ({
        id: item.id,
        gxp: item.experience,
        experience: item.type === 'Equipment' ? 0 : item.experience,
        updatedAt: now,
      })
    ), {
      updateOnDuplicate: ['gxp', 'experience', 'updatedAt'],
    })
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
