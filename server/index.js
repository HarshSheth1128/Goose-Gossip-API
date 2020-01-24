'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors());
app.use(bodyParser.json())

const port = 4000

app.use('/', [require('./routes/auth_routes')])


// app.use(require('./middleware/error_middleware').all)

app.listen(port, () => console.log(`Goose-Gossip-API listening on port ${port}!`))

module.exports = app
