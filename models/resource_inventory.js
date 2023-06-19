'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Resource_Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Apes, {
        sourceKey: 'ape_id',
        foreignKey: 'id'
      });

      this.hasOne(models.Resource, {
        sourceKey: 'resource_id',
        foreignKey: 'id'
      });
    }
  }
  Resource_Inventory.init({
    ape_id: DataTypes.INTEGER,
    resource_id: DataTypes.INTEGER,
    resource_quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Resource_Inventory',
  });
  return Resource_Inventory;
};