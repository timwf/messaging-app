import { SEND_MESSAGE, UPDATE_CURRENT_USER_NAME, UPDATE_ALL_USERS, UPDATE_MESSAGES} from './messagesTypes'
import io from 'socket.io-client'
import  store  from '../../newStore'

export function sendMessage(sentMessage){
    return{
        type: SEND_MESSAGE,
        payload: sentMessage        
    }
}

export function updateCurrentUserName(user){
    return{
        type: UPDATE_CURRENT_USER_NAME,
        payload: user
    }
}

export function updateAllUsers(arr){
    return{
        type: UPDATE_ALL_USERS,
        payload: arr
    }
}

export function updateMessages(msg){
    return{
        type: UPDATE_MESSAGES,
        payload: msg
    }
}






let socket = io("/")

socket.on('send message', function(msg){
    console.log('message recieved');
    
    
    store.dispatch(sendMessage(msg)); 
});    



socket.on('all users array', function(arr){
    store.dispatch(updateAllUsers(arr))
})

socket.on('chat message', function(msg){
      console.log('message recieved');
      console.log(msg);
    store.dispatch(updateMessages(msg))
})



