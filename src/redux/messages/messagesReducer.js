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
    console.log(action.payload);
    switch (action.type) {
        case RECIEVED_MESSAGE:
            return{
                ...state
            }
        case SEND_MESSAGE:
            console.log('huh?')
            
            return[
                ...state,
                {user: 'tim', message: action.payload}
            ]
        default: 
        
        
        return state
    }
}