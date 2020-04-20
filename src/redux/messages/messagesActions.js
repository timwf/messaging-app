import { SEND_MESSAGE, RECIEVED_MESSAGE, USER_NAME} from './messagesTypes'
import io from 'socket.io-client'
import  store  from '../../newStore'

export function sendMessage(sentMessage){
    return{
        type: SEND_MESSAGE,
        payload: sentMessage
        
    }
}

export function recieveMessage(sentMessage){
    return{
        type: SEND_MESSAGE,
        payload: sentMessage.message
    }
}

export function userName(user){
    return{
        type: USER_NAME,
        payload: user
    }
}

let socket = io(":3001")
socket.on('chat message', function(msg){
    store.dispatch(sendMessage(msg)); 
});    



