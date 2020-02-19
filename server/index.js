'use strict'

const bodyParser = require('body-parser')
const cors = require('cors')
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(bodyParser.json())

const port = 4000
app.use((req, res, next) => {
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next();
})

app.use('/', [require('./routes/auth'), require('./routes/Chats'), require('./routes/Categories'),require('./routes/Messages')])


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
