const Database = require("../db/config")

module.exports = {
    
    async validar(){
        
        const db = await Database()

        let NumberId = 1
        while(ExistIds == 1){

            const ExistIds = await db.all(`SELECT id = ${NumberId} FROM drones`)
            NumberId++
            
        }
        console.log(NumberId)
        // verifica se esse numero ja existe
        


        await db.close()

        

    },

   


}
