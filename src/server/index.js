var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

let userNames = []

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
    console.log(socket.userName);
    
    userNames.push(usr) 
    console.log(userNames);
    io.emit('all users array', userNames) 
  });

socket.on('disconnect', function(){  
  console.log(socket.userName + ' has left');
  console.log('what? ' + JSON.stringify(socket.userName));
  
  userNames = userNames.filter(e => e !== socket.userName); // will return ['A', 'C']
  io.emit('all users array', userNames) 
  
  
})

});

http.listen(3001, function(){
  console.log('listening on *:3001');
});
