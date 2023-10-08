const sequelize = require('sequelize')
const mysql = require('mysql2')
require('dotenv').config()

const connection = new sequelize(process.env.MYSQLDATABASE, process.env.MYSQLUSER, process.env.MYSQLPASSWORD, {
    host: process.env.MYSQLHOST ,
    port: process.env.MYSQLPORT,
    dialect : 'mysql',
  })

module.exports = connection