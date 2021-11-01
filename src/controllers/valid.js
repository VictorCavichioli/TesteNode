const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./src/db/drones.sqlite');

let sql = `SELECT id = ? FROM drones`;
let NumberId = 1;

// first row only
db.all(sql, [NumberId], (err, row) => {
  
    while(row){
        if (err) {
            return console.error(err.message);
        }
        return !row
            ? console.log(!row)
            : NumberId++
    
    } 
    
});
console.log(NumberId)

// close the database connection
db.close();