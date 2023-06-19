'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bank_Channel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bank_Channel.init({
    name: DataTypes.STRING,
    currency: DataTypes.STRING,
    public_wallet_address: DataTypes.STRING,
    is_external: DataTypes.BOOLEAN,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Bank_Channel',
  });
  return Bank_Channel;
};