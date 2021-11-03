const Database = require("../db/config")

module.exports = {
    
    async getAll(req,res){
        // open the database
        const db = await Database()

        const sqlite3 = require('sqlite3').verbose();

        let sql = `SELECT * FROM fly`;
        
        let results = await db.all(sql)

        // close the database connection
        db.close();

        res.send(results)
        
    }

}
