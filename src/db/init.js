const Database = require("./config")

const initDb = {
    async init(){
        const db = await Database()

        await db.exec(`CREATE TABLE drones (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            customer_name TEXT,
            customer_adress TEXT,
            battery TEXT,
            max_speed DECIMAL,
            average_speed DECIMAL,
            status TEXT,
            currenty_fly TEXT
        )`);

        

        await db.close()
    }
}

initDb.init();

