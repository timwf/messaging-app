var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

let username = []

io.on('connection', function(socket){
  console.log('a user connected');  
  let id = socket.id
  io.emit('socket id on connection', id); 

  socket.on('chat message', function(msg){
    console.log('message: ' + JSON.stringify(msg));
     io.emit('chat message', msg);
  });

  socket.on('update user', function(usr){
    io.emit('new user emit', (usr))  
    username.push({userName: usr, id: id}) 
    console.log(username);
    
  });
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});
