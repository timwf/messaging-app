import { RECIEVED_MESSAGE, SEND_MESSAGE } from "./messagesTypes";





const initialState = 
    [
        {
        user: "testing123",
        message: "fuck you"
     },
     {
        user: "testing123",
        message: "fuck you"
     },
     {
        user: "testing123",
        message: "fuck you"
     }

    ]


export function messageReducer(state = initialState, action){
    switch (action.type) {
        case RECIEVED_MESSAGE:
            return{
                ...state
            }
        case SEND_MESSAGE:
 
            return[
                ...state,
                {user: 'tim', message: action.payload}
            ]
        default: 
        
        
        return state
    }
}