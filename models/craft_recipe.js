'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Craft_Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Resource, {
        sourceKey: 'ingredient_id',
        foreignKey: 'id'
      });

      this.hasOne(models.Items, {
        sourceKey: 'ingredient_id',
        foreignKey: 'id'
      });

      this.hasOne(models.Currency, {
        sourceKey: 'ingredient_id',
        foreignKey: 'id'
      });
    }
  }
  Craft_Recipe.init({
    craftable_id: DataTypes.INTEGER,
    craftable_tier: DataTypes.INTEGER,
    ingredient_type: DataTypes.STRING,
    ingredient_id: DataTypes.INTEGER,
    ingredient_quantity: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Craft_Recipe',
  });
  return Craft_Recipe;
};