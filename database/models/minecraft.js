'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Minecraft extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Minecraft.init({
    name: DataTypes.STRING,
    itemID: DataTypes.STRING,
    numericalID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Minecraft',
  });
  return Minecraft;
};