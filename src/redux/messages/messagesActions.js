import { SEND_MESSAGE, RECIEVED_MESSAGE} from './messagesTypes'

export function sendMessage(sentMessage){
    return{
        type: SEND_MESSAGE,
        payload: sentMessage
    }
}

export function recieveMessage(reMessage){
    return{
        type: SEND_MESSAGE,
        payload: sentMessage
    }
}
