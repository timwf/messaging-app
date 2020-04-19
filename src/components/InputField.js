import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import { sendThatMessage } from '../redux/messages/messagesActions';
import { connect } from 'react-redux'


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
  console.log('this meassge' + thisMessage)
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
                   onClick={() => props.doIt(thisMessage)}
                 >.
                 </Button>
             </div>
        </div>

    );
}


const mapStateToProps = (state) => {
  return{
      state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      doIt: (message) => dispatch(sendThatMessage(message))
      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputField);


