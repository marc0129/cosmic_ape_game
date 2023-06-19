'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Utility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Utility.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    icon: DataTypes.STRING,
    type: DataTypes.STRING,
    rarity: DataTypes.STRING,
    durability: DataTypes.INTEGER,
    effect_description: DataTypes.STRING,
    stack: DataTypes.INTEGER,
    key: DataTypes.INTEGER,
    category: DataTypes.STRING,
    is_active: DataTypes.STRING,
    luck_rate_bonus: DataTypes.INTEGER,
    gold_gain_bonus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Utility',
  });
  return Utility;
};