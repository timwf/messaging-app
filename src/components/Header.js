import React from 'react';


import '../App.css'
import {connect} from 'react-redux'



function Header(props){

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
