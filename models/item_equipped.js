'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item_Equipped extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Items, {
        sourceKey: 'item_id',
        foreignKey: 'id'
      });
      this.hasOne(models.Utility, {
        sourceKey: 'item_id',
        foreignKey: 'id'
      });
    }
  }
  Item_Equipped.init({
    mission_history_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    effect: DataTypes.DOUBLE,
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Item_Equipped',
  });
  return Item_Equipped;
};