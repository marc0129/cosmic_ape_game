'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mission_Histories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Apes, {
        sourceKey: 'ape_id',
        foreignKey: 'id'
      });
      
      this.hasOne(models.Missions, {
        sourceKey: 'mission_id',
        foreignKey: 'id'
      });

      this.hasOne(models.Levels, {
        sourceKey: 'level_id',
        foreignKey: 'id'
      });

      this.hasMany(models.Item_Equipped, {
        sourceKey: 'id',
        foreignKey: 'mission_history_id',
        as: 'equippedItems'
      })
    }
  }
  Mission_Histories.init({
    ape_id: DataTypes.INTEGER,
    mission_id: DataTypes.INTEGER,
    level_id: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    started_at: DataTypes.DATE,
    ended_at: DataTypes.DATE,
    duration: DataTypes.DOUBLE,
    expected_end_time: DataTypes.DATE,
    is_success: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Mission_Histories',
  });
  return Mission_Histories;
};