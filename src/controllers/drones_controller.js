const Database = require("../db/config")

module.exports = {
    
    async getAll(req,res){
        // open the database
        const db = await Database()
        const drone_id = req.params.droneId
        const name = req.params.name
        const current_fly_id = req.params.currentFlyId
        const status = req.params.status

        const sqlite3 = require('sqlite3').verbose();

        let sql = `SELECT * FROM drones`;
        
        let results = await db.all(sql)

        // close the database connection
        db.close();

        res.send(results)
        // localhost:8080/drone?droneId=1&name=Daniel&currentFlyId=1&status=OFFILINE
        
    }

}
