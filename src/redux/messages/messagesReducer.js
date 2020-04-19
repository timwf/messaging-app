import { RECIEVED_MESSAGE, SEND_MESSAGE } from "./messagesTypes";


const initialState = 
    [{
        user: "testing123",
        message: "fuck you"
    }]


export function messageReducer(state = initialState, action){
    switch (action.type) {
        case RECIEVED_MESSAGE:
            return{
                ...state
            }
        case SEND_MESSAGE:
            return{
                ...state
            }
        default: return state
    }
}