const sqlite3 = require("sqlite3")
const { open } = require("sqlite")

module.exports = () => 
    open({
        filename: './src/dbSequelize/drones.sqlite',
        driver: sqlite3.Database,
    });