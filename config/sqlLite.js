const sqlite3 = require('sqlite3').verbose();

// Create a database connection
const db = new sqlite3.Database('data.db');

// Check if the connection was successful
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, completed BOOLEAN)");
});

// Close the connection when the app exits
process.on('SIGINT', () => {
  db.close();
  process.exit();
});

module.exports=db;