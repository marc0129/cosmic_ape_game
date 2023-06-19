'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addIndex('Tiers', ['tier'], {
      name: 'tiers_tier',
      fields: ['tier'],
    })

    await queryInterface.addConstraint('Apes', {
      type: 'FOREIGN KEY',
      name: 'apes_tier_tiers_tier',
      fields: ['tier'],
      references: {
        table: 'Tiers',
        field: 'tier',
      },
    })

    await queryInterface.addConstraint('Missions', {
      type: 'FOREIGN KEY',
      name: 'missions_map_id_maps_id',
      fields: ['map_id'],
      references: {
        table: 'Maps',
        field: 'id',
      },
    })

    await queryInterface.addConstraint('Resource_Inventories', {
      type: 'FOREIGN KEY',
      name: 'resource_inventories_ape_id_apes_id',
      fields: ['ape_id'],
      references: {
        table: 'Apes',
        field: 'id',
      },
    })

    await queryInterface.addConstraint('Resource_Inventories', {
      type: 'FOREIGN KEY',
      name: 'resource_inventories_resource_id_resources_id',
      fields: ['resource_id'],
      references: {
        table: 'Resources',
        field: 'id',
      },
    })

    await queryInterface.addConstraint('Mission_Histories', {
      type: 'FOREIGN KEY',
      name: 'mission_histories_ape_id_apes_id',
      fields: ['ape_id'],
      references: {
        table: 'Apes',
        field: 'id',
      },
    })

    await queryInterface.addConstraint('Mission_Histories', {
      type: 'FOREIGN KEY',
      name: 'mission_histories_mission_id_missions_id',
      fields: ['mission_id'],
      references: {
        table: 'Missions',
        field: 'id',
      },
    })

    await queryInterface.addIndex('Apes', ['address'], {
      name: 'apes_address',
      fields: ['address'],
      unique: true,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Apes', 'apes_tier_tiers_tier')
    await queryInterface.removeIndex('Apes', 'apes_tier_tiers_tier')
    await queryInterface.removeConstraint('Missions', 'missions_map_id_maps_id')
    await queryInterface.removeIndex('Missions', 'missions_map_id_maps_id')
    await queryInterface.removeConstraint('Resource_Inventories', 'resource_inventories_ape_id_apes_id')
    await queryInterface.removeIndex('Resource_Inventories', 'resource_inventories_ape_id_apes_id')
    await queryInterface.removeConstraint('Resource_Inventories', 'resource_inventories_resource_id_resources_id')
    await queryInterface.removeIndex('Resource_Inventories', 'resource_inventories_resource_id_resources_id')
    await queryInterface.removeConstraint('Mission_Histories', 'mission_histories_ape_id_apes_id')
    await queryInterface.removeIndex('Mission_Histories', 'mission_histories_ape_id_apes_id')
    await queryInterface.removeConstraint('Mission_Histories', 'mission_histories_mission_id_missions_id')
    await queryInterface.removeIndex('Mission_Histories', 'mission_histories_mission_id_missions_id')
    await queryInterface.removeIndex('Apes', 'apes_address')
    await queryInterface.removeIndex('Tiers', 'tiers_tier')
  }
};
