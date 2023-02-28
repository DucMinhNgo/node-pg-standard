const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'dbuser',
  host: 'localhost',
  database: 'todoapp',
  password: 'admin2021',
  port: 5432
});

module.exports = {
  pool
}