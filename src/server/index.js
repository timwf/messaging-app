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

  socket.on('send user', function(usr){ 
    //current user updated 
      
    
    userNames.push(usr) 

    io.emit('all users array', userNames)

    // io.emit('socket id on connection', id);  
    // io.emit('this user name', usr)

    // io.emit('new user emit', (username))  
    // console.log(usr);
    // console.log(username);   
  });
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});
