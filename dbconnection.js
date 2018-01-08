var mysql = require('mysql');
var connection = mysql.createPool({
  host: 'sql12.freemysqlhosting.net',
  user: 'sql12214287',
  password: 'fexu5rNr6x',
  database: 'sql12214287'
});
module.exports = connection;
