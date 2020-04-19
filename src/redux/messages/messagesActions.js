import { SEND_MESSAGE, RECIEVED_MESSAGE} from './messagesTypes'
import io from 'socket.io-client'

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
// sends to server
function sendChatAction(message){
    console.log("this is the mesaage" + message);    
    socket.emit('chat message', message);
}


export function sendThatMessage(message){
   sendChatAction(message)
    return (dispatch) => {   
        if (socket) {
            console.log(message);
               
            socket.on('chat message', function(msg){
            dispatch(sendMessage(msg));     
        });     
        
    };

  }
}

