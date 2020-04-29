const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/', (req, res, next) => res.sendFile(__dirname + './index.html'));

// sockets test


let userNames =[];

io.on('connection', function(socket){
    console.log('a user connected');  
    let id = socket.id
    io.emit('send user from server', (id))
   
  
    socket.on('send message', function(msg){
      console.log('message: ' + JSON.stringify(msg));
       io.emit('chat message', msg);
    });
  
    socket.on('user for array', function(usr){ 
      socket.userName = usr
     userNames.push(usr) 
      io.emit('all users array', userNames) 
    });
  
  socket.on('disconnect', function(){  
   userNames = userNames.filter(e => e !== socket.userName); // will return ['A', 'C']
    io.emit('all users array', userNames) 
    
    
  })
  
  });



server.listen(port);