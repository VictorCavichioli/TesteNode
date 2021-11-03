const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./src/db/drones.sqlite');

let sql = `SELECT * FROM drones WHERE id  = ?`;
let droneId = 1;

// first row only
db.all(sql, [droneId], (err, row) => {
  if (err) {
    return console.error(err.message);
  }
  return row
    ? console.log(row)
    : console.log(`Sem drones encontrados com o ID: ${droneId}`);

});

// close the database connection
db.close();