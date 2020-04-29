import { SEND_MESSAGE, UPDATE_CURRENT_USER_NAME, UPDATE_ALL_USERS, UPDATE_MESSAGES, USER_IS_TYPING} from './messagesTypes'
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

export function userIsTyping(usr){
    console.log('faf');
    
    return{
        type: USER_IS_TYPING,
        payload: usr
    }
}




let socket = io(":3001")

socket.on('send message', function(msg){
    store.dispatch(sendMessage(msg)); 
});    



socket.on('all users array', function(arr){
    store.dispatch(updateAllUsers(arr))
})

socket.on('chat message', function(msg){
      
    store.dispatch(updateMessages(msg))
})

socket.on('user is typing server', function(usr){
    console.log("szdhsrtnj");
    
    store.dispatch(userIsTyping(usr))
} )

