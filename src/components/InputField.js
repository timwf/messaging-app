import React, {useState, useEffect} from 'react';
import {  } from '../redux/messages/messagesActions';
import { connect } from 'react-redux'
import io from 'socket.io-client'



let userTyping = "someone"

function InputField(props) {   
  const [thisMessage, setThisMessage] = useState("") 
  const [userIsTypingState, setUserIsTypingState] = useState(false)
  
useEffect(() => {  
  socket.on('user is typing server', function(usr){
    setUserIsTypingState(true)
    userTyping = usr;
    setTimeout(function() { setUserIsTypingState(false); }, 2000);  
} )

}, [])




  

  function userIsTyping(e){
    setThisMessage(e.target.value);
   
    if(!userIsTypingState  || userTyping != props.userName.userName){
    
      socket.emit('user is typing', props.userName.userName) 
    }       
  }
 
   
  let swears = ["fuck", "shit", "bollocks", "cunt", "wanker", "fucking", "dick", "wank", "piss"];

  function sendTheMessage(e, message){
    e.preventDefault()
    if (message.message.length >= 1){
      socket.emit('send message', message);
     setThisMessage("");
     swears.map(swear => {
      if (message.message.toLowerCase().includes(swear)){
        alert("NAUGHTY!! you said " + swear)
      }       
     })
    }
    else{
      return
    }
  }
  
    

    return (     

      <div className="message-input-cont">
        {userIsTypingState && (userTyping != props.userName.userName) ? <p className="user-is-typing">{userTyping} is typing...</p>: <p className="user-is-typing"></p>}
        <div>
          <form onSubmit={(e) => sendTheMessage(e, {message: thisMessage, user: props.userName.userName, id: props.userName.id})}>
          <input
          className="message-input"
          type="text-area"
            label="Write your message"
            value={thisMessage}
            onChange={(e) => userIsTyping(e)}
          />
          </form>
        </div>
      </div>
    );
}

let socket = io(":3001")
// sends to server




const mapStateToProps = (state) => {
  return{
      state: state
  }
}



export default connect(mapStateToProps)(InputField);


