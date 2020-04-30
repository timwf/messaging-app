import React, {useState} from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import io from 'socket.io-client'
import store from '../newStore'
import { Provider} from 'react-redux'
import Header  from './Header'
import InputField  from './InputField'
import Messages from './Messages'

let finalIdAndUser = {}
let updateUserId = true

let socket = io(":3001")

socket.on('send user from server', function(id){
  if (updateUserId){
    finalIdAndUser = {id: id}
    updateUserId = false
    }
  })


function UserPopUp(props) {
     const classes = useStyles() 
    const [newUserName, setUserName] = useState("")
    const [userNameNeeded, setUserNameNeeded] = useState(true)
 

  
    function userNameNeededFunc(){
        if (store.getState().userNames.includes(newUserName)){
        alert('That user name has been taken!'); 
        return           
      }  

      if (newUserName.length > 12){
        alert("User name needs to be under 12 characters")
        return
      }

      if (newUserName.length < 1){
        return
      }
      
      if (userNameNeeded){
      finalIdAndUser = {...finalIdAndUser, userName: newUserName}
      socket.emit('user for array', newUserName);
      setUserNameNeeded(false)  
      } 
    }
  

    if (userNameNeeded){
      
    return(
          <div className="pop-up-cont">
          <div className="pop-up-box">
              <p>Enter Your User Name</p>
              <TextField
                  label="Choose a username"
                  value={newUserName}
                  onChange={(e) => setUserName(e.target.value)}
              />
              <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}                  
                  onClick={userNameNeededFunc}
              >Go!
              </Button>
          </div>     
      </div>
      ) 
    }
    else{
   
      return(
        <Provider store={store}>   
            <Header />
            <Messages userName={finalIdAndUser}/>
            <InputField userName={finalIdAndUser}/>
     </Provider>
      )
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


export default UserPopUp
