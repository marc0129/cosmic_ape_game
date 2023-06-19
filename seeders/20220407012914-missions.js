'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Missions', [

      {
        name: "Cosmic Particles 1",
        cp_cost: "0",
        time: 4,
        cp_reward: 50,
        cp_hour: 12.5,
        resource_reward: null,
        resource_avg_reward: null,
        resource_avg_hour: null,
        item_pool_1: 43,
        item_pool_2: 16,
        item_pool_3: 47,
        item_pool_4: 14,
        pos_x: 350,
        pos_y: 683,
        mission_luck: 5,
        map_id: 1,
        icons: 'cp',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        name: "Rock",
        cp_cost: 25,
        time: 4,
        cp_reward: 12,
        cp_hour: 2.4,
        resource_reward: "5,15",
        resource_avg_reward: 10,
        resource_avg_hour: 2.16,
        item_pool_1: 20,
        item_pool_2: 22,
        item_pool_3: 35,
        item_pool_4: 20,
        pos_x: 48,
        pos_y: 302,
        mission_luck: 5,
        map_id: 1,
        icons: 'rock',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      

      {
        name: "Rock and Ore",
        cp_cost: 35,
        time: 6,
        cp_reward: 15,
        cp_hour: 2.5,
        resource_reward: "3,10",
        resource_avg_reward: 13,
        resource_avg_hour: 2.5,
        item_pool_1: 19,
        item_pool_2: 16,
        item_pool_3: 23,
        item_pool_4: 14,
        pos_x: 845,
        pos_y: 552,
        mission_luck: 5,
        map_id: 1,
        icons: 'rock,ore',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      

      {
        name: "Wood, Rock, and Food",
        cp_cost: 45,
        time: 8,
        cp_reward: 20,
        cp_hour: 2.5,
        resource_reward: "2,10",
        resource_avg_reward: 18,
        resource_avg_hour: 2.25,
        item_pool_1: 34,
        item_pool_2: 1,
        item_pool_3: 32,
        item_pool_4: 5,
        pos_x: 1075,
        pos_y: 369,
        mission_luck: 5.5,
        map_id: 1,
        icons: 'wood,rock,food',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      
      
      
      
      
      
      
      {
        name: "Cosmic Particles 2",
        cp_cost: "0",
        time: 6,
        cp_reward: 80,
        cp_hour: 13.33,
        resource_reward: null,
        resource_avg_reward: null,
        resource_avg_hour: null,
        item_pool_1: 13,
        item_pool_2: 4,
        item_pool_3: 17,
        item_pool_4: 2,
        pos_x: 895,
        pos_y: 571,
        mission_luck: 5,
        map_id: 4,
        icons: 'cp',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: "Wood and Food",
        cp_cost: 35,
        time: 6,
        cp_reward: 15,
        cp_hour: 2.5,
        resource_reward: "3,10",
        resource_avg_reward: 13,
        resource_avg_hour: 2.16,
        item_pool_1: 37,
        item_pool_2: 34,
        item_pool_3: 41,
        item_pool_4: 32,
        pos_x: 195,
        pos_y: 571,
        mission_luck: 5.5,
        map_id: 4,
        icons: 'wood,food',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: "Wood, Ore, and Food",
        cp_cost: 45,
        time: 8,
        cp_reward: 20,
        cp_hour: 2.5,
        resource_reward: "2,10",
        resource_avg_reward: 18,
        resource_avg_hour: 2.25,
        item_pool_1: 28,
        item_pool_2: 7,
        item_pool_3: 26,
        item_pool_4: 11,
        pos_x: 525,
        pos_y: 611,
        mission_luck: 5.5,
        map_id: 4,
        icons: 'wood,ore,food',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      
      
      
      
      
      
      
      
      {
        name: "Cosmic Particles 3",
        cp_cost: "0",
        time: 8,
        cp_reward: 115,
        cp_hour: 14.375,
        resource_reward: null,
        resource_avg_reward: null,
        resource_avg_hour: null,
        item_pool_1: 1,
        item_pool_2: 10,
        item_pool_3: 17,
        item_pool_4: 8,
        pos_y: 761,
        pos_x: 555,
        mission_luck: 5.5,
        map_id: 2,
        icons: 'cp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Wood, Rock, Ore, and Food",
        cp_cost: 55,
        time: 10,
        cp_reward: 25,
        cp_hour: 2.5,
        resource_reward: "2,10",
        resource_avg_reward: 24,
        resource_avg_hour: 2.4,
        item_pool_1: 10,
        item_pool_2: 43,
        item_pool_3: 8,
        item_pool_4: 47,
        pos_y: 691,
        pos_x: 975,
        mission_luck: 6,
        map_id: 2,
        icons: 'wood,ore,rock,food',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: "Wood",
        cp_cost: 25,
        time: 4,
        cp_reward: 12,
        cp_hour: 2.4,
        resource_reward: "5,15",
        resource_avg_reward: 10,
        resource_avg_hour: 2.5,
        item_pool_1: 31,
        item_pool_2: 34,
        item_pool_3: 35,
        item_pool_4: 32,
        pos_y: 391,
        pos_x: 905,
        mission_luck: 5,
        map_id: 2,
        icons: 'wood',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: "Wood and Rock",
        cp_cost: 35,
        time: 6,
        cp_reward: 15,
        cp_hour: 2.5,
        resource_reward: "3,10",
        resource_avg_reward: 13,
        resource_avg_hour: 2.16,
        item_pool_1: 31,
        item_pool_2: 46,
        item_pool_3: 35,
        item_pool_4: 44,
        pos_y: 351,
        pos_x: 45,
        mission_luck: 5,
        map_id: 2,
        icons: 'wood,rock',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 


      {
        name: "Food",
        cp_cost: 25,
        time: 4,
        cp_reward: 12,
        cp_hour: 2.4,
        resource_reward: "5,15",
        resource_avg_reward: 10,
        resource_avg_hour: 2.5,
        item_pool_1: 37,
        item_pool_2: 40,
        item_pool_3: 41,
        item_pool_4: 38,
        pos_y: 421,
        pos_x: 215,
        mission_luck: 5,
        map_id: 5,
        icons: 'food',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: "Rock and Food",
        cp_cost: 35,
        time: 6,
        cp_reward: 15,
        cp_hour: 2.5,
        resource_reward: "3,10",
        resource_avg_reward: 13,
        resource_avg_hour: 2.16,
        item_pool_1: 22,
        item_pool_2: 43,
        item_pool_3: 20,
        item_pool_4: 47,
        pos_y: 501,
        pos_x: 625,
        mission_luck: 5,
        map_id: 5,
        icons: 'rock,food',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: "Wood, Rock, and Ore",
        cp_cost: 45,
        time: 8,
        cp_reward: 20,
        cp_hour: 2.5, 
        resource_reward: "2,10",
        resource_avg_reward: 18,
        resource_avg_hour: 2.25,
        item_pool_1: 34,
        item_pool_2: 1,
        item_pool_3: 32,
        item_pool_4: 5,
        pos_y: 601,
        pos_x: 245,
        mission_luck: 5.5,
        map_id: 5,
        icons: 'wood,rock,ore',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: "Wood and Ore",
        cp_cost: 35,
        time: 6,
        cp_reward: 15,
        cp_hour: 2.5,
        resource_reward: "3,10",
        resource_avg_reward: 13,
        resource_avg_hour: 2.16,
        item_pool_1: 28,
        item_pool_2: 1,
        item_pool_3: 26,
        item_pool_4: 5,
        pos_y: 581,
        pos_x: 1225,
        mission_luck: 5,
        map_id: 5,
        icons: 'wood,ore',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      
      
      {
        name: "Cosmic Particles 4",
        cp_cost: "0",
        time: 10,
        cp_reward: 150,
        cp_hour: 15,
        resource_reward: null,
        resource_avg_reward: null,
        resource_avg_hour: null,
        item_pool_1: 7,
        item_pool_2: 46,
        item_pool_3: 11,
        item_pool_4: 44,
        pos_x: 455,
        pos_y: 711,
        mission_luck: 6,
        map_id: 3,
        icons: 'cp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ore and Food",
        cp_cost: 35,
        time: 6,
        cp_reward: 15,
        cp_hour: 2.5,
        resource_reward: "3,10",
        resource_avg_reward: 13,
        resource_avg_hour: 2.16,
        item_pool_1: 25,
        item_pool_2: 40,
        item_pool_3: 29,
        item_pool_4: 38,
        pos_y: 491,
        pos_x: 385,
        mission_luck: 5,
        map_id: 3,
        icons: 'ore,food',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: "Ore",
        cp_cost: 25,
        time: 4,
        cp_reward: 12,
        cp_hour: 2.4,
        resource_reward: "5,15",
        resource_avg_reward: 10,
        resource_avg_hour: 2.5,
        item_pool_1: 25,
        item_pool_2: 28,
        item_pool_3: 29,
        item_pool_4: 26,
        pos_y: 371,
        pos_x: 1125,
        mission_luck: 5,
        map_id: 3,
        icons: 'ore',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: "Rock, Ore, and Food",
        cp_cost: 45,
        time: 8,
        cp_reward: 20,
        cp_hour: 2.5, 
        resource_reward: "2,10",
        resource_avg_reward: 18,
        resource_avg_hour: 2.25,
        item_pool_1: 22,
        item_pool_2: 4,
        item_pool_3: 20,
        item_pool_4: 2,
        pos_y: 521,
        pos_x: 813,
        mission_luck: 5.5,
        map_id: 3,
        icons: 'rock,ore,food',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Missions', null, {});
  }
};