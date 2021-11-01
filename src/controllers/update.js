const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./src/db/drones.sqlite');


let battery = 25
let max_speed = 2
let average_speed = 15
let status = 'sucesso'
let current_fly = 98


let sql = `UPDATE drones
SET battery = ${battery},
max_speed = ${max_speed},
average_speed = ${average_speed},
status = '${status}',
currenty_fly = ${current_fly}
WHERE id = ?`;
let droneId = 1;

// first row only
db.all(sql, [droneId], (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Row(s) updated: ${this.changes}`);

});

// close the database connection
db.close();