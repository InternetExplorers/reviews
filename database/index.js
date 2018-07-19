var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost', 
  user: 'student',
  password: 'student',
  database: 'chat'
});

connection.connect();


module.exports = connection;
