const Database = require("./configSqlite")

const initDb = {
    async init(){
        const db = await Database()
        
        await db.close()
    }
}

initDb.init();