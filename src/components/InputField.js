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

function InputField(props) {

 
  
  
  const classes = useStyles()  
  const [thisMessage, setThisMessage] = useState()  
    return (     
      <div className={classes.input}>
        <div>
          <TextField
            label="Write your message"
            value={thisMessage}
            onChange={(e) => setThisMessage(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => sendTheMessage({message: thisMessage, user: props.userName.userName, id: props.userName.id}) }
          >SEND
          </Button>
        </div>
      </div>
    );
}

let socket = io(":3001")
// sends to server

function sendTheMessage(message){
   socket.emit('send message', message);
}


const mapStateToProps = (state) => {
  return{
      state: state
  }
}



export default connect(mapStateToProps)(InputField);


