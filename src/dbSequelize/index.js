(async ()=>{

    const database = require('./db')
    const Drone = require('./drone')
    await database.sync()


})()