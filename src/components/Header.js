import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

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
  }
}));

function Header(){
    const classes = useStyles();

      return (
          <div>
              <AppBar position="static">
                  <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                      <p className={classes.p}>Tim, Flo, John-Paul</p>
                    </Typography>
                  </Toolbar>
              </AppBar>
          </div>
      );
}

export default Header;
