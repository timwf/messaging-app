import React, {useState} from 'react';
import Recieved from "./Recieved";
import { makeStyles } from '@material-ui/core/styles';
import Sent from "./Sent";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import InboxIcon from '@material-ui/icons/Inbox';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
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
    return (
      <div>
        <List>
            {
                ["Hi Mother Fucker", "Yeah"].map(item => (
                    <div>
                        <p className={classes.user}> user</p>
                        <ListItem className={classes.item}button>
                            <ListItemText primary={item} />
                       </ListItem>
                    </div>
                ))
            }
        </List>
      {/* <Recieved />
      <Sent /> */}
      <List>
          {
              ["what??", "okay"].map(item => (
                  <div className={classes.recieved}>
                      <p className={classes.user}> user</p>
                      <ListItem className={classes.itemRecieved}button>
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
