'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Missions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Maps, {
        sourceKey: 'map_id',
        foreignKey: 'id'
      });

      this.hasOne(models.Items, {
        sourceKey: 'item_pool_1',
        foreignKey: 'id',
        as: 'item1'
      })

      this.hasOne(models.Items, {
        sourceKey: 'item_pool_2',
        foreignKey: 'id',
        as: 'item2'
      })

      this.hasOne(models.Items, {
        sourceKey: 'item_pool_3',
        foreignKey: 'id',
        as: 'item3'
      })

      this.hasOne(models.Items, {
        sourceKey: 'item_pool_4',
        foreignKey: 'id',
        as: 'item4'
      })

      this.hasMany(models.Mission_Item_Reward, {
        sourceKey: 'id',
        foreignKey: 'mission_id',
      })

      this.hasMany(models.Mission_Currencies, {
        sourceKey: 'id',
        foreignKey: 'mission_id',
      })

      this.hasMany(models.Mission_Resource_Reward, {
        sourceKey: 'id',
        foreignKey: 'mission_id',
      })
    }
  }
  Missions.init({
    name: DataTypes.STRING,
    cp_cost: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    cp_reward: DataTypes.INTEGER,
    cp_hour: DataTypes.DOUBLE,
    resource_reward: DataTypes.STRING,
    resource_avg_reward: DataTypes.INTEGER,
    resource_avg_hour: DataTypes.INTEGER,
    item_pool_1: DataTypes.INTEGER,
    item_pool_2: DataTypes.INTEGER,
    item_pool_3: DataTypes.INTEGER,
    item_pool_4: DataTypes.INTEGER,
    mission_luck: DataTypes.DOUBLE,
    pos_x: DataTypes.INTEGER,
    pos_y: DataTypes.INTEGER,
    map_id: DataTypes.INTEGER,
    icons: DataTypes.STRING,
    item_luck_1: DataTypes.DOUBLE,
    item_luck_2: DataTypes.DOUBLE,
    item_luck_3: DataTypes.DOUBLE,
    item_luck_4: DataTypes.DOUBLE,
    main_branch: DataTypes.STRING,
    secondary_branch: DataTypes.STRING,
    tier: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    key: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Missions',
  });
  return Missions;
};