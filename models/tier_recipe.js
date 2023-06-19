'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tier_Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Tier, {
        sourceKey: 'tier',
        foreignKey: 'tier'
      });

      this.hasOne(models.Resource, {
        sourceKey: 'resource_id',
        foreignKey: 'id'
      });
    }
  }
  Tier_Recipe.init({
    tier: DataTypes.INTEGER,
    resource_id: DataTypes.INTEGER,
    resource_quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tier_Recipe',
  });
  return Tier_Recipe;
};