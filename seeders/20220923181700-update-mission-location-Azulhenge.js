'use strict';
const { Maps, Missions } = require('../models/index');

module.exports = {
  async up (queryInterface, Sequelize) {
    const mapsFromDB = await Maps.findAll()
    const maps = {
      'Lost City of Lasol': mapsFromDB.find(map => map.name === 'THE LOST CITY OF LASOL').id,
      'Prism Valley': mapsFromDB.find(map => map.name === 'PRISM VALLEY').id,
      'Azulhenge': mapsFromDB.find(map => map.name === 'AZULHENGE').id,
      'Crystal Forest': mapsFromDB.find(map => map.name === 'CRYSTAL FOREST').id,
      'Crusader Village': mapsFromDB.find(map => map.name === 'COSMIC VILLAGE').id,
    }

    const tiers = [1, 2, 3, 4, 5, 6]
    await Promise.all(
      tiers.map(async tier => {
        const mission = await Missions.findOne({
          where: {
            main_branch: 'Expedition',
            secondary_branch: 'Resource',
            tier,
            map_id: maps['Lost City of Lasol']
          }
        })

        if (!mission) {
          console.log('No mission for Tier: ', tier)
          return
        }

        mission.set({
          map_id: maps['Azulhenge']
        })

        await mission.save()
      })
    )
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
