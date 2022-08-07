'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StorageDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  // object relational mapping
  StorageDetail.init({
    userId: DataTypes.INTEGER,
    coursesId: DataTypes.INTEGER,
    dateSave: DataTypes.STRING,
    favouriteListId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'StorageDetail',
  });
  return StorageDetail;
};