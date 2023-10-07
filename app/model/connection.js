const sequelize = require('sequelize')
const mysql = require('mysql2')
require('dotenv').config()

const connection = new sequelize.Sequelize('mydb', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
  })

module.exports = connection