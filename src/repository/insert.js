const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./src/db/drones.sqlite');

db.run(`INSERT INTO fly(description) VALUES("Fly 1")`, function(err) {
  if (err) {
    return console.log(err.message);
  }
  // get the last insert id
  console.log(`A row has been inserted with rowid ${this.lastID}`);
  });
// insert one row into the langs table
db.run(`INSERT INTO drones(customer_name ,
    customer_adress,
    battery,
    max_speed,
    average_speed,
    status,
    currenty_fly) VALUES("DANIEL", "152 ALPHA VILLE", 
    72, 3.8, 11.6, "DEPLOYED", 1)`, function(err) {
  if (err) {
    return console.log(err.message);
  }
  // get the last insert id
  console.log(`A row has been inserted with rowid ${this.lastID}`);
});

// close the database connection
db.close();

/*
 2, "DANIEL", "152 ALPHA VILLE", 
    72, 3.8, 11.6, "DEPLOYED", 85
 */

/*
1, "SUZANN", "955 SPRINGVIEW JUNCTION", 
    90, 3.8, 11.6, "FAILED", 94
*/