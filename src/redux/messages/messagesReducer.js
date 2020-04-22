import { RECIEVED_MESSAGE, SEND_MESSAGE, USER_NAME, USER_NAME_SOCKET } from "./messagesTypes";





const initialState = {
    user: {},
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
            console.log(action.payload);    
            if (!state.user.userName) {    
    
            return{
                ...state,
                user: action.payload,  
                      
            }}
            else return state;

        case USER_NAME_SOCKET:
            console.log('action' + action.payload);
            console.log('fucj you');          
            return{
                ...state,
                userNames: action.payload
            }
        default: 
        
        
        return state
    }
}