import React, { Fragment } from 'react';
import Recieved from "./Recieved";
import { makeStyles } from '@material-ui/core/styles';
import Sent from "./Sent";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import InboxIcon from '@material-ui/icons/Inbox';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { connect } from 'react-redux'
import '../App.css';
import { sendThatMessage } from '../redux/messages/messagesActions';
import { sendChatAction } from '../store';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  MuiListPadding: {
      padding: "0px"
  },
  item: {
      backgroundColor: "#ac7878",
      width: "fit-content",
   
      borderRadius: "5px"
  },
  user: {
      fontSize: "12px",
      margin: "0px 10px 1px 10px"
  },
  recieved: {
      flexFlow: "column",
      display: "flex",
      flexWrap: "wrap-reverse",
      textAlign: "right"
  },
  itemRecieved: {
      backgroundColor: "#24c324",
      width: "fit-content",
      borderRadius: "5px",
      float: "right"
  },
}));

function Messages(props){
    const initUser = props.state.user
    const classes = useStyles();
    console.log(props.state.user);
    
    
    // window.scrollTo(0,(document.body.scrollHeight)+11150);

    return (
        <div className="message-board">
                 {props.state.messages.map((user) => user.user == props.state.user 
                 ? 
                 <div className="sent-container">   
                      {/* <p className="sent-message-user">{user.user}</p>
                     <p className="message-recieved-bubble">{user.message}</p> */}
                 </div>                    
                : 
                <div  >                 
                {/* <p className="recieved-message-user">{user.user}</p>
                <p className="message-sent-bubble">{user.message}</p> */}
                </div>  
         
                            )}
          
                            </div>      
    
    )
    }

const mapStateToProps = (state) => {
    return{
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        doIt: (message) => dispatch(sendChatAction(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);



// return (
//    
// }
// else{
//     console.log("returend false");
//     return (
       


// }