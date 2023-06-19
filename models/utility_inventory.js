'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Utility_Inventory extends Model {
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

      this.hasOne(models.Utility, {
        sourceKey: 'utility_id',
        foreignKey: 'id'
      });
    }
  }
  Utility_Inventory.init({
    ape_id: DataTypes.INTEGER,
    utility_id: DataTypes.INTEGER,
    utility_quantity: DataTypes.INTEGER,
    utility_durability: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Utility_Inventory',
  });
  return Utility_Inventory;
};