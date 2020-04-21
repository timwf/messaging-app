import { RECIEVED_MESSAGE, SEND_MESSAGE, USER_NAME } from "./messagesTypes";





const initialState = {
    user: null,
    messages: [],
    userNames: []
}
   


export function messageReducer(state = initialState, action){
    switch (action.type) {
        case SEND_MESSAGE: 
        console.log(state);        
            return{
                ...state, 
                messages: [...state.messages, action.payload]
             
            }
        case USER_NAME:
            console.log(state);            
            return{
                ...state,
                user: action.payload,
                userNames: [...state.userNames, action.payload]
            }
        default: 
        
        
        return state
    }
}