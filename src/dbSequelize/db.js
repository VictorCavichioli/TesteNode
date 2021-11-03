const Sequelize = require('sequelize')
const { default: configSequelize } = require('./configSequelize')
const sequelize = new Sequelize(configSequelize.database, configSequelize.username, 
configSequelize.password, configSequelize.params)

module.exports = sequelize