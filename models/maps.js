'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Maps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      this.hasMany(models.Missions, {
        sourceKey: 'id',
        foreignKey: 'map_id'
      });

    }
  }
  Maps.init({
    name: DataTypes.STRING,
    pos_x: DataTypes.INTEGER,
    pos_y: DataTypes.INTEGER,
    biome_img: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Maps',
  });
  return Maps;
};