var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var port = process.env.PORT || 3001;

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

  socket.on('user is typing', function(usr){
    console.log(usr);
    io.emit('user is typing server', usr)
  })

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

http.listen(port, function(){
  console.log('listening on *:3001');
});
