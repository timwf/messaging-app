import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import '../App.css';
import {ctx} from '../store'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  p:{
      fontSize: "12px",
  },
  header: {
      textAlign: "center"
  }
}));

function Header(){
    const classes = useStyles();

    const [store] = React.useContext(ctx);
    console.log(store);

      return (
          <div>
              <AppBar position="fixed" className={classes.header}>
                  <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {store.map(user => (
                            <span>{user.user},      </span>
                        ))}

                    </Typography>
                  </Toolbar>
              </AppBar>
          </div>
      );
}

export default Header;
