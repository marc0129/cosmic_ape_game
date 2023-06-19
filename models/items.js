'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Inventory, {
        sourceKey: 'id',
        foreignKey: 'item_id'
      });

      this.hasMany(models.Craft_Recipe, {
        sourceKey: 'id',
        foreignKey: 'ingredient_id'
      });

      this.hasMany(models.Craft_Recipe, {
        sourceKey: 'id',
        foreignKey: 'craftable_id',
        as: 'recipes'
      })

      this.hasMany(models.Mission_Item_Reward, {
        sourceKey: 'id',
        foreignKey: 'item_id',
      });
    }
  }
  Items.init({
    tier: DataTypes.INTEGER,
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    durability: DataTypes.INTEGER,
    activation_chance: DataTypes.DOUBLE,
    effect_bonus: DataTypes.DOUBLE,
    description: DataTypes.TEXT,
    icon: DataTypes.STRING,
    score: DataTypes.INTEGER,
    effect_type: DataTypes.STRING,
    type: DataTypes.STRING,
    rarity: DataTypes.STRING,
    experience: DataTypes.INTEGER,
    salvage: DataTypes.INTEGER,
    gold: DataTypes.INTEGER,
    efficiency: DataTypes.INTEGER,
    gxp: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Items',
  });
  return Items;
};