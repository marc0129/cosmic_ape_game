'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class ShopItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.hasOne(models.Resource, {
        sourceKey: 'resource_id',
        foreignKey: 'id',
      })

      this.hasOne(models.Utility, {
        sourceKey: 'utility_id',
        foreignKey: 'id',
      })

      this.hasOne(models.Currency, {
        sourceKey: 'currency_id',
        foreignKey: 'id',
      })
    }
  }
  ShopItem.init(
    {
      resource_id: DataTypes.INTEGER,
      utility_id: DataTypes.INTEGER,
      daily_amount: DataTypes.INTEGER,
      weekly_amount: DataTypes.INTEGER,
      monthly_amount: DataTypes.INTEGER,
      cost: DataTypes.DOUBLE,
      currency_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ShopItem',
    },
  )
  return ShopItem
}
