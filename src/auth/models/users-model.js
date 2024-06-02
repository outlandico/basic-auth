// models/users-model.js

const { DataTypes } = require('sequelize');
const sequelize = require('../../database/db');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Make sure username is unique
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Other fields as needed
});

module.exports = User;


