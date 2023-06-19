'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mission_Currencies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.hasOne(models.Currency, {
        sourceKey: 'currency_id',
        foreignKey: 'id',
      })
      
      this.hasOne(models.Missions, {
        sourceKey: 'mission_id',
        foreignKey: 'id',
      })
    }
  }
  Mission_Currencies.init({
    mission_id: DataTypes.INTEGER,
    currency_id: DataTypes.INTEGER,
    lowest_amount: DataTypes.DOUBLE,
    highest_amount: DataTypes.DOUBLE,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mission_Currencies',
  });
  return Mission_Currencies;
};