'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character_Transaction extends Model {
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
    }
  }
  Character_Transaction.init({
    character_id: DataTypes.INTEGER,
    currency_id: DataTypes.INTEGER,
    amount: DataTypes.DOUBLE,
    transaction_date: DataTypes.DATE,
    source_of_transaction: DataTypes.JSON,
    audit_fields: DataTypes.JSON,
    is_settlement: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Character_Transaction',
  });
  return Character_Transaction;
};