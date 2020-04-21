var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket){
  console.log('a user connected');
  console.log(socket.id);
  

  socket.on('chat message', function(msg){
    console.log('message: ' + JSON.stringify(msg));
     io.emit('chat message', msg);
  });

  socket.on('update user', function(msg){
    console.log('username: ' + JSON.stringify(msg));
     io.emit('user update', msg);
  });

});

http.listen(3001, function(){
  console.log('listening on *:3001');
});
