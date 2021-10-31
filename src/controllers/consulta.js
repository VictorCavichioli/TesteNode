const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./src/db/drones.sqlite');

let sql = `SELECT * FROM drones
           WHERE id  = ?`;
let playlistId = 1;

// first row only
db.get(sql, [playlistId], (err, row) => {
  if (err) {
    return console.error(err.message);
  }
  return row
    ? console.log(row.id, row.name)
    : console.log(`Sem drones encontrados com o ID: ${playlistId}`);

});

// close the database connection
db.close();