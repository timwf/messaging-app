import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import '../App.css'
import {connect} from 'react-redux'


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
      textAlign: "center",
      width: "50%"
  }
}));

function Header(props){
    const classes = useStyles();

    

      return (
          <div>
              <AppBar position="fixed" className={classes.header}>
                  <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                      <span>hi</span>
                      {/* {props.state.map(item =>  <span>{item.user}</span>)} */}
                           
                        

                    </Typography>
                  </Toolbar>
              </AppBar>
          </div>
      );
}

const mapStateToProps = (state) => {
  return{
    state: state
  }
}

export default connect(mapStateToProps)(Header);
