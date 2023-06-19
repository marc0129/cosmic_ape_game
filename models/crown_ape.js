'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Crowned_Apes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Apes, {
        sourceKey: 'ape_id',
        foreignKey: 'id',
      })
    }
  }
  Crowned_Apes.init(
    {
      owner: DataTypes.STRING,
      ape_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Crowned_Apes',
    },
  )

  return Crowned_Apes
}
