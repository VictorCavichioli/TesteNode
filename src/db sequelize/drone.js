const Sequelize = require('sequelize')
const database = require('db')

const Drones = database.define('drone', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    customer_name:{
        type: Sequelize.STRING
        
    },
    customer_adress:{
        type: Sequelize.STRING
    },
    battery:{
        type: Sequelize.INTEGER,
        allowNull: false,
        
    },
    max_speed:{
        type: Sequelize.DECIMAL,
        allowNull: false,
    },
    average_speed:{
        type: Sequelize.DECIMAL,
        allowNull: false,
    },
    status:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    currenty_fly:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }
            

})
module.exports = Drones