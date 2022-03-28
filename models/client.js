'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Client.init(
    {
      code: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      document_number: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
      document_type: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Client',
    }
  );
  return Client;
};
