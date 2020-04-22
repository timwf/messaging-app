import React, {useState} from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import { userName } from '../redux/messages/messagesActions';
import io from 'socket.io-client'


function UserPopUp(props) {
    const classes = useStyles() 
    const [newUserName, setUserName] = useState()
    const [userNameNeeded, setUserNameNeeded] = useState(true)


    function userNameNeededFunc(){
      //gets rid of popoup
      setUserNameNeeded(false)
      //sends username to server 
      sendUserName(newUserName)
    }


    let socket = io(":3001")
    function sendUserName(user){
      socket.emit('send user', user);
    }
    

    return(
        <div className={userNameNeeded ? "pop-up-cont" : 'hidden'}>
        <div className="pop-up-box">
            <p>Enter Your User Name</p>
            <TextField
                label="Write your username"
                value={newUserName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                className={classes.button}                  
                onClick={userNameNeededFunc}
            >Send
            </Button>
        </div>     
    </div>
    ) 
}





const mapStateToProps = (state) => {
    return{
        state: state
    }
  }


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


export default connect(mapStateToProps)(UserPopUp)
