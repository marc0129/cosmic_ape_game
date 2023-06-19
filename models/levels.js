'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Levels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Levels.init({
    level: DataTypes.INTEGER,
    cp: DataTypes.INTEGER,
    lr_bonus: DataTypes.INTEGER,
    inventory: DataTypes.INTEGER,
    cp_storage: DataTypes.INTEGER,
    max_equips: DataTypes.INTEGER,
    experience: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    stamina_refresh_per_hour: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Levels',
  });
  return Levels;
};