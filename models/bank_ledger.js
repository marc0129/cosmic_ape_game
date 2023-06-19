'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bank_Ledger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Bank_Channel, {
        sourceKey: 'channel',
        foreignKey: 'id'
      });
    }
  }
  Bank_Ledger.init({
    channel: DataTypes.INTEGER,
    request_type: DataTypes.STRING,
    amount: DataTypes.DOUBLE,
    unique_ref: DataTypes.STRING,
    signature: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bank_Ledger',
  });
  return Bank_Ledger;
};