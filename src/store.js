import React from 'react';
import io from "socket.io-client"

export const ctx = React.createContext();
let initialState = [{user: "tim", message: "fuck"},{user: "tom", message: "off"},{user: "thm", message: "offfff"}]




function reducer(state, action) {
    // const {userR, message} = action.payload;
    console.log(action.payload);

    switch (action.type) {
        case 'RECIEVE_MESSAGE' :
            console.log("recieved in reducer");
            console.log(action.payload.user);
            console.log(action.payload.message);
        return [
             ...state, {user: action.payload.user, message: action.payload.message}

        ]
        break;
        default:
        return{
        state
    }

            // return state

    }
}



let socket;


// sends to server
function sendChatAction(message){
    socket.emit('chat message', message);
}



export default function Store(props){
    const [reducerHook, dispatch] = React.useReducer(reducer, initialState);
    console.log(reducerHook);

    //recieves from server
    if (!socket) {
        socket = io(":3001");
        socket.on('chat message', function(msg){
            dispatch({type: 'RECIEVE_MESSAGE', payload: msg});

    });
};

    const user = "tim" + Math.random(100).toFixed(2);


    return(
        <ctx.Provider value={{reducerHook, sendChatAction, user}}>
        <button

        onClick={() => {
            dispatch({type: "RECIEVE_MESSAGE", payload: {user: "tttiiii", message: "workd"}})
        }}

      >.
      </button>


            {props.children}
        </ctx.Provider>
    )

}
