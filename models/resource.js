'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Resource extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Resource_Inventory, {
        sourceKey: 'id',
        foreignKey: 'resource_id'
      });

      this.hasMany(models.Craft_Recipe, {
        sourceKey: 'id',
        foreignKey: 'ingredient_id'
      });
    }
  }
  Resource.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    icon: DataTypes.STRING,
    type: DataTypes.STRING,
    rarity: DataTypes.STRING,
    stack: DataTypes.INTEGER,
    salvage: DataTypes.INTEGER,
    gold: DataTypes.INTEGER,
    tier: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    effect: DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'Resource',
  });
  return Resource;
};