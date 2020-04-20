import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import { sendMessage } from '../redux/messages/messagesActions';
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

function InputField(props) {
  const classes = useStyles()  
  const [thisMessage, changeThisMessage] = useState("")

  const user = "user tim"

    return (     
        <div className={classes.input}>
              <div>
                   <TextField
                       label="Write your message"
                       value={thisMessage}
                       onChange={(e) => changeThisMessage(e.target.value)}
                    />
                   <Button
                   variant="contained"
                   color="primary"
                   className={classes.button}
                   endIcon={<Icon>send</Icon>}
                   onClick={() => sendChatAction(thisMessage)}
                 >.
                 </Button>
             </div>
        </div>

    );
}

let socket = io(":3001")
// sends to server

function sendChatAction(message, user){
  console.log("this is the mesaage" + message);    
  socket.emit('chat message', message);
}


const mapStateToProps = (state) => {
  return{
      state: state
  }
}

export default connect(mapStateToProps)(InputField);


