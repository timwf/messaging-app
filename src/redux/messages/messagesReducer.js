import {  UPDATE_ALL_USERS, UPDATE_MESSAGES,USER_IS_TYPING } from "./messagesTypes";


const initialState = {
    messages: [],
    userNames: [],
    userIsTyping: {typing: false, user: ""}
} 


export function messageReducer(state = initialState, action){
    switch (action.type) {
        case UPDATE_ALL_USERS:
            console.log(action.payload);            
            return{
                ...state,
                userNames: action.payload
                }  
        case UPDATE_MESSAGES:
            return{
                ...state,
                messages: [...state.messages, action.payload]
            }  
        case USER_IS_TYPING:
            console.log('gett');
            
            return{
                ...state,
                userIsTyping: {typing: true, user: action.payload}
            }  
        default: return state
    }
}