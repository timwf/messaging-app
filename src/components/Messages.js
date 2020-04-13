import React, {useState} from 'react';
import Recieved from "./Recieved";
import { makeStyles } from '@material-ui/core/styles';
import Sent from "./Sent";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import InboxIcon from '@material-ui/icons/Inbox';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {ctx} from '../store'
import '../App.css';

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
      margin: "0px 8px 0px 8px",
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
      margin: "0px 8px 0px 8px",
      borderRadius: "5px"
  },
}));

function Messages(){
    const classes = useStyles();

    const[store] = React.useContext(ctx);
    console.log(store);
    return (
      <div className="messages-cont">
        <List>
            {store.map((item, id) => (
                    <div key={id}>
                        <p className={classes.user}>{item.user}</p>
                        <ListItem className={classes.item}>
                            <ListItemText primary={item.message} />
                       </ListItem>
                    </div>
                ))
            }
        </List>
      {/* <Recieved />
      <Sent /> */}
      <List>
          {
              ["what??", "okay", "f", "f", "f","g","g","k", "l", "f"].map((item, id)=> (
                  <div key={id} className={classes.recieved}>
                      <p className={classes.user}>me</p>
                      <ListItem className={classes.itemRecieved}>
                          <ListItemText primary={item} />
                     </ListItem>
                  </div>
              ))
          }
      </List>
      </div>
    );

}

export default Messages;
