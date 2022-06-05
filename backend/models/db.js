const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: s.env.DB_HOST,
  user: s.env.DB_USER,
  password: s.env.DB_PASS,
  database: s.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;