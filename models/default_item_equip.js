'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Default_Item_Equip extends Model {
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
      this.hasOne(models.Apes, {
        sourceKey: 'ape_id',
        foreignKey: 'id'
      });
    }
  }
  Default_Item_Equip.init({
    ape_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Default_Item_Equip',
  });
  return Default_Item_Equip;
};