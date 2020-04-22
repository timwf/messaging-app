import { RECIEVED_MESSAGE, SEND_MESSAGE, USER_NAME, USER_NAME_SOCKET, SOCKET_ID } from "./messagesTypes";





const initialState = {
    user: {},
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
        case USER_NAME:   
            return{
                ...state,
                user: {...state.user, userName: action.payload}  
                      
            }
        case USER_NAME_SOCKET:   
            return{
                ...state,
                userNames:  action.payload.map(item => item.userName)
            }
        case SOCKET_ID:
            return{
            ...state,
            user: {userName: "", userId: action.payload}
            }
        
        default: 
        
        
        return state
    }
}