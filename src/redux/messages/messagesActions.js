import { SEND_MESSAGE, RECIEVED_MESSAGE, USER_NAME, USER_NAME_SOCKET, SOCKET_ID} from './messagesTypes'
import io from 'socket.io-client'
import  store  from '../../newStore'

export function sendMessage(sentMessage){
    return{
        type: SEND_MESSAGE,
        payload: sentMessage        
    }
}

export function userName(user){
    return{
        type: USER_NAME,
        payload: user
    }
}

export function userNameSocket(user){
    return{
        type: USER_NAME_SOCKET,
        payload: user
    }
}

export function socketIdAction(socketId){
    return{
        type: SOCKET_ID,
        payload: socketId
    }
}
let socket = io(":3001")
socket.on('chat message', function(msg){
    store.dispatch(sendMessage(msg)); 
});    

socket.on('user update', function(usr){
    store.dispatch(userName(usr))

});   

socket.on('new user emit', function(usr){
    store.dispatch(userNameSocket(usr)); 
});

socket.on('socket id on connection', function(id){    
    let socketId = id
    store.dispatch(socketIdAction(socketId))
    
})



