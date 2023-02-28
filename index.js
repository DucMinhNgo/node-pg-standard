const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
const db = require('./routes/pool/users');
const { client } = require('./connection/client');
const clientDB = require('./routes/admin/users');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
app.get('/client/users', clientDB.getUsers)

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
  client.connect((err) => {
    if (err) {
      console.log('client connect is error: ', err?.stack);
    } else {
      console.log('client connected');
    }
  })
})