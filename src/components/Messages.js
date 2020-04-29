import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import '../App.css';
import { sendChatAction } from '../store';



function Messages(props){

   
    window.scrollTo(0,(document.body.scrollHeight));
    
    
   
    

    
    return (      
        <div className="message-board">
             {props.state.userNames.length == 1 ? 
                  <div  >                 
                  <p className="recieved-message-user">Admin</p>
                  <p className="message-sent-bubble">Hi {props.userName.userName}.  You are the only one here! You can talk to yourself but it might not be much fun... invite a friend to join - share they this link: https//ww.timiscool.com </p>
                  </div>  
             : <p></p>}
                 {props.state.messages.map((user) => props.userName.id == user.id
                 ? 
                 
                 <div className="sent-container">   
                
                      <p className="sent-message-user">{user.user}</p>
                     <p className="message-recieved-bubble">{user.message}</p>
                 </div>                    
                : 
                <div  >                 
                <p className="recieved-message-user">{user.user}</p>
                <p className="message-sent-bubble">{user.message}</p>
                </div>  
         
                )}
          
         </div>      
    
    )
    }

const mapStateToProps = (state) => {
    return{
        state: state,
     
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