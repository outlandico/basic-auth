'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cores');
const base64 = require('base-64');
const { Sequelize, DataTypes} = require('sequelize');

//prepare the app
const app = express();
app.use(cors());

// initialize sequelize
const seqeulize = new Sequelize(prcoess.env.database_url, {dialect:"postgres"});

// Configure the app to acquire data from the in  request.body
app.use(express.json());
app.use(express.urlencoded({extended: true }));

// Data Model for the user...
// PG Databases: String: VARCHAR(255)
// MySQL Databases: String: CHAR(255)
const Users = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    ALLOWNULL: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  } 
})

// ROUTES 
app.get('/', (request, response) => {
  response.status(200).send("I am working");
});

// Connect to PG and Start our API Server
sequelize.sync()
.then( () => {
  app.listen( process.env.PORT, () => console.log('Listening on ${process.env.PORT}' ));
})
.catch(err => console.error(err.message))