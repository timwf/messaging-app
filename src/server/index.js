var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

let username = []

io.on('connection', function(socket){
  console.log('a user connected');

  

  socket.on('chat message', function(msg){
    console.log('message: ' + JSON.stringify(msg));
     io.emit('chat message', msg);
  });

  socket.on('update user', function(usr){
    console.log('username: ' + JSON.stringify(usr));
    console.log(socket.username);
    let currentUser = {userName: usr, userId: Math.random()}
    username.push(currentUser)
    console.log(username);
    io.emit('new user emit', (username))   
     io.emit('user update', currentUser);
  });

});

http.listen(3001, function(){
  console.log('listening on *:3001');
});
