'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Apes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Levels, {
        sourceKey: 'level_id',
        foreignKey: 'id'
      });

      this.hasMany(models.Inventory, {
        sourceKey: 'id',
        foreignKey: 'ape_id'
      });

      this.hasMany(models.Resource_Inventory, {
        sourceKey: 'id',
        foreignKey: 'ape_id'
      });

      this.hasMany(models.Utility_Inventory, {
        sourceKey: 'id',
        foreignKey: 'ape_id'
      });

      this.hasOne(models.Mission_Histories, {
        sourceKey: 'id',
        foreignKey: 'ape_id',
        as: 'active_mission'
      });

      this.hasOne(models.Mission_Histories, {
        sourceKey: 'id',
        foreignKey: 'ape_id',
        as: 'mission_history'
      });

      this.hasMany(models.Default_Item_Equip, {
        sourceKey: 'id',
        foreignKey: 'ape_id',
        as: 'default_items'
      })

      this.hasOne(models.Tier, {
        sourceKey: 'tier',
        foreignKey: 'tier',
      })

      this.hasOne(models.Account, {
        sourceKey: 'owner',
        foreignKey: 'address',
      })
    }
  }
  Apes.init({
    address: DataTypes.STRING,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    owner: DataTypes.STRING,
    symbol: DataTypes.STRING,
    level_id: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    cp: DataTypes.INTEGER,
    is_favorited: DataTypes.BOOLEAN,
    tier: DataTypes.INTEGER,
    last_stamina_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Apes',
  });

  return Apes;
};