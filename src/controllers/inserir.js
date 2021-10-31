const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./src/db/drones.sqlite');

// insert one row into the langs table
db.run(`INSERT INTO drones(id, customer_name ,
    customer_adress,
    battery,
    max_speed,
    average_speed,
    status,
    currenty_fly) VALUES(1, "Suzann", "955 Springview
    Junction", 90, 3.8, 11.6, "failed", 94)`, function(err) {
  if (err) {
    return console.log(err.message);
  }
  // get the last insert id
  console.log(`A row has been inserted with rowid ${this.lastID}`);
});

// close the database connection
db.close();