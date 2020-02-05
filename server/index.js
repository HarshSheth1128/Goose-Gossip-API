'use strict'

const bodyParser = require('body-parser')
const cors = require('cors')
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


app.use(cors());
app.use(bodyParser.json())

const port = 4000

app.use('/', [require('./routes/auth'), require('./routes/Chats')])


// app.use(require('./middleware/error_middleware').all)

io.on('connection', (socket) => {
    console.log('connection');
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
        socket.broadcast.emit('chat response', msg);
    });
    socket.on('chat typing', function (isTyping) {
        socket.broadcast.emit('chat typing', isTyping);
    })
});


http.listen(port, () => console.log(`Goose-Gossip-API listening on port ${port}!`))

module.exports = app
