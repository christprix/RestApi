require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./queries')
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server Started on port ${port}`))

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
