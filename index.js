const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const port = 4000

app.use('/', [require('./routes/auth_routes.js'),])

app.use(require('./middleware/error_middleware').all)

app.listen(port, () => console.log(`Goose-Gossip-API listening on port ${port}!`))

module.exports = app
