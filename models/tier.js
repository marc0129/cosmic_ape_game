'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Tier_Recipe, {
        sourceKey: 'tier',
        foreignKey: 'tier'
      });
    }
  }
  Tier.init({
    tier: DataTypes.INTEGER,
    max_level: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tier',
  });
  return Tier;
};