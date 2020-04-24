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

  }
}));

function Header(props){
    const classes = useStyles();

    console.log(props.state.userNames);
       
    

      return (
          <div>
              <AppBar position="fixed" className={classes.header}>
                  <Toolbar>
                    <Typography variant="h6" className={classes.title}>    
                    {props.state.userNames.map(item => <span>{item}  ᛫ </span>)} 
                    {/* {uniqueTags.map(item => <span>{item}</span>)}  */}
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
