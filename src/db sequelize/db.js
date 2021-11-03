const Sequelize = require('sequelize')
const sequelize = new Sequelize('crud', 'root', 'teste',{
    dialect: 'sqlite',
    host: 'localhost'
})

module.exports = sequelize