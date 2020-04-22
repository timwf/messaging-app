import { SEND_MESSAGE, UPDATE_CURRENT_USER_NAME, UPDATE_ALL_USERS} from './messagesTypes'
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




let socket = io(":3001")

socket.on('send message', function(msg){
    store.dispatch(sendMessage(msg)); 
});    

socket.on('send user from server', function(user){
    store.dispatch(updateCurrentUserName(user))
})

socket.on('all users array', function(arr){
    store.dispatch(updateAllUsers(arr))
})

