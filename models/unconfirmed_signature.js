'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Unconfirmed_Signature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.hasOne(models.Bank_Ledger, {
        sourceKey: 'unique_ref',
        foreignKey: 'unique_ref'
      });
    }
  }
  Unconfirmed_Signature.init({
    signature: DataTypes.STRING,
    confirmed: DataTypes.BOOLEAN,
    address: DataTypes.STRING,
    unique_ref: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Unconfirmed_Signature',
  });
  return Unconfirmed_Signature;
};