module.exports = {
    
    async getAll(req,res){
        
        res.json(["SUCCESS", "FAIL", "DELAYED", "FLYING", "OFFILINE"])
        
    }
    
}
