const Database = require("../db/config")

module.exports = {
    async validar(NumberId){
        const db = await Database()
    
        // verifica se esse numero ja existe
        const ExistIds = await db.all(`SELECT id FROM drones`)

        isId = ExistIds.some(ExistId => ExistId === NumberId)
        /* SELECT
        if(ExistIds){
            // Get no banco
            await db.run(`SELECT INTO drones(id) VALUES(${NumberId}) `)
        }*/

        if(!ExistIds){
            // Get no banco
            await db.run(`INSERT INTO drones(
            customer_name ,
            customer_adress,
            battery,
            max_speed,
            average_speed,
            status,
            currenty_fly) VALUES("Suzann", "955 Springview
            Junction, 90, 3.8, 11.6, "failed"), 94`)
                /*
            "customer_name": "Suzann", "customer_address": "955 Springview
            Junction", "battery": 90, "max_speed": 3.8, "average_speed": 11.6,
            "status": "failed", "current_fly": 94 }*/
            
        }

        await db.close()

        

    },

   


}
