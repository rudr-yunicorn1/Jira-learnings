const mysql = require("mysql2");
require("dotenv").config();

// Connect without specifying database first
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

connection.connect(err => {
  if (err) {
    console.log("MySQL Connection Error:", err);
    return;
  }
  console.log("MySQL Connected");

  // Create database if it doesn't exist
  connection.query(
    `CREATE DATABASE IF NOT EXISTS \`${process.env.MYSQL_DATABASE}\``,
    (err, result) => {
      if (err) {
        console.log("Database creation error:", err);
        return;
      }
      console.log(`Database '${process.env.MYSQL_DATABASE}' is ready`);

      // Switch to the database
      connection.changeUser(
        { database: process.env.MYSQL_DATABASE },
        err => {
          if (err) console.log("Error switching database:", err);
          else console.log(`Using database '${process.env.MYSQL_DATABASE}'`);
        }
      );
    }
  );
});

module.exports = connection;
