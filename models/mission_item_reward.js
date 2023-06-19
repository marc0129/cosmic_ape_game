'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mission_Item_Reward extends Model {
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

      this.hasOne(models.Items, {
        sourceKey: 'item_id',
        foreignKey: 'id',
      });

      this.hasOne(models.Utility, {
        sourceKey: 'item_id',
        foreignKey: 'id',
      });
    }
  }
  Mission_Item_Reward.init({
    mission_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    luck: DataTypes.DOUBLE,
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Mission_Item_Reward',
  });
  return Mission_Item_Reward;
};