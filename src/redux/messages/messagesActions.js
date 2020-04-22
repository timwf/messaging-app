import { SEND_MESSAGE, RECIEVED_MESSAGE, USER_NAME, USER_NAME_SOCKET} from './messagesTypes'
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



