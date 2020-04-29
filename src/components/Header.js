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
  

      return (
          <div className="header">

                     
      {props.state.userNames.map((item, index) => <p className="header-users">{index ? ', ':""}{item}</p>)} 
                    {/* {uniqueTags.map(item => <span>{item}</span>)}  */}

          </div>
      );
}

const mapStateToProps = (state) => {
  return{
    state: state
  }
}

export default connect(mapStateToProps)(Header);
