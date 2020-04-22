import { SEND_MESSAGE, UPDATE_CURRENT_USER_NAME, UPDATE_ALL_USERS } from "./messagesTypes";





const initialState = {
    currentUser: {},
    messages: [],
    userNames: []
}
   


export function messageReducer(state = initialState, action){
    switch (action.type) {
        case SEND_MESSAGE: 
           return{
                ...state, 
                messages: [...state.messages, action.payload]
             
            }
        case UPDATE_CURRENT_USER_NAME:
            return{
                ...state,
                currentUser: {userName: action.payload}
            }
        case UPDATE_ALL_USERS:
            console.log(action.payload);
            
            return{
                ...state,
                userNames: action.payload
                }
         
        
        default: 
        
        
        return state
    }
}