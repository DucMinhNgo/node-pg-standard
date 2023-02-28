const { Client } = require('pg')
const client = new Client({
  user: 'dbuser',
  host: 'localhost',
  database: 'todoapp',
  password: 'admin2021',
  port: 5432
})

module.exports = {
  client
}