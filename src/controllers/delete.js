const sqlite3 = require('sqlite3').verbose();

// open a database connection
let db = new sqlite3.Database('./src/db/drones.sqlite', (err) => {
  if (err) {
    console.error(err.message);
  }
});

let id = 1;
// delete a row based on id
db.run(`DELETE FROM drones WHERE id=?`, id, function(err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Row(s) deleted ${this.changes}`);
});

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
});