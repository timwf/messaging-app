import React from 'react';

export const ctx = React.createContext();
console.log(ctx.Provider);


let initialState = [{user: "tim", message: "hi"}, {user: "tom", message: "what do you wanttt"}]

function Store(props){
    const reducerHook = React.useReducer(reducer, initialState);

    return(
        <ctx.Provider value={reducerHook}>
            {props.children}
        </ctx.Provider>
    )

}

function reducer(state, action) {
    const {user, message} = action.payload
    switch (action.type) {
        case 'RECIEVE_MESSAGE' :
        return{
            ...state
            // {user, message}
        }

            break;
        default:
            return state

    }
}



export default Store;
