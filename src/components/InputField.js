import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import { sendMessage, userName } from '../redux/messages/messagesActions';
import { connect } from 'react-redux'
import io from 'socket.io-client'

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "12px",
    marginLeft: "10px",
    width: "13px"
  },
  input: {
    width: "100%",
    bottom: "0",
    position: "fixed",
    textAlign: "center",
    backgroundColor: "grey",
     paddingBottom: "14px",
          paddingTop: "14px"

  },
}));

let userTyping = ""

function InputField(props) {   
  const classes = useStyles()  
  const [thisMessage, setThisMessage] = useState("") 
  const [userIsTypingState, setUserIsTypingState] = useState(false)
  

  socket.on('user is typing server', function(usr){
    setUserIsTypingState(true)
    userTyping = usr;
    console.log(userTyping);    
    setTimeout(function() { setUserIsTypingState(false); }, 2000);  
} )
  

  function userIsTyping(e){
    console.log(thisMessage);    
    setThisMessage(e.target.value);
    if(!userIsTypingState){
      socket.emit('user is typing', props.userName.userName) 
    }       
  }
   console.log(userTyping);
   

  function sendTheMessage(e, message){
    console.log(thisMessage);
    e.preventDefault()
    if (message.message.length >= 1){
      socket.emit('send message', message);
     setThisMessage("")
    }
    else{
      alert('write something then!')
    }
  }
    console.log(userIsTypingState);
    

    return (     

      <div className="message-input-cont">
        {userIsTypingState ? <p className="user-is-typing">{userTyping} is typing...</p>: <p className="user-is-typing"></p>}
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


