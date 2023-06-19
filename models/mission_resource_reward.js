'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mission_Resource_Reward extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Missions, {
        sourceKey: 'mission_id',
        foreignKey: 'id'
      });

      this.hasOne(models.Resource, {
        sourceKey: 'reward_id',
        foreignKey: 'id',
      });

      this.hasOne(models.Utility, {
        sourceKey: 'reward_id',
        foreignKey: 'id',
      });
    }
  }
  Mission_Resource_Reward.init({
    mission_id: DataTypes.INTEGER,
    reward_id: DataTypes.INTEGER,
    reward_type: DataTypes.STRING,
    reward_description: DataTypes.STRING,
    name: DataTypes.STRING,
    luck: DataTypes.DOUBLE,
    lowest_amount: DataTypes.INTEGER,
    highest_amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mission_Resource_Reward',
  });
  return Mission_Resource_Reward;
};