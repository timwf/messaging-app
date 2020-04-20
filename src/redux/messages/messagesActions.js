import { SEND_MESSAGE, RECIEVED_MESSAGE} from './messagesTypes'
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
        payload: sentMessage
    }
}

let socket = io(":3001")
socket.on('chat message', function(msg){
    store.dispatch(sendMessage(msg)); 
});    



