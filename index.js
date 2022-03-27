const express = require('express');
const { SocketAddress } = require('net');
const app = express()
const path = require('path');
const http = require('http');
var server = app.listen(3000);
var io = require('socket.io')(server);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.render('pages/index');
  })

  io.sockets.on('connection', function(socket) {
    socket.on('adduser', function(username){
      socket.emit('update', 'Conn')
    })
  })
