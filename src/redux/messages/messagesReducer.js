import {  UPDATE_ALL_USERS, UPDATE_MESSAGES } from "./messagesTypes";


const initialState = {
    messages: [],
    userNames: []
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
        default: 
        
        
        return state
    }
}