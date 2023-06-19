'use strict';

const { Craft_Recipe, Items } = require('../models/index');

module.exports = {
  async up (queryInterface, Sequelize) {
    const recipes = await Craft_Recipe.findAll()
    const craftable_tiers = await Promise.all(recipes.map(async (recipe) => {
      return (await Items.findOne({
        where: {
          id: recipe.craftable_id
        }
      })).tier
    }))

    let bulkStore = []
    recipes.forEach((recipe, index) => {
      bulkStore.push({
        id: recipe.id,
        craftable_tier: craftable_tiers[index]
      })
    })

    try {
      await Craft_Recipe.bulkCreate(
        bulkStore,
        {
          updateOnDuplicate: ["craftable_tier"],
        }
      )
    } catch (err) {
      console.log(err)
    }
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Craft_Recipes', null, {});
  }
};
