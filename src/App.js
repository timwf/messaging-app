import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Messages from "./components/Messages";
import InputField from "./components/InputField";
import TestComp from "./components/TestComp";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import store from './newStore'
import UserPopUp from './components/UserPopUp';





function App() {


  return (
    <div className="App">
        <UserPopUp />
    </div>
  );
}

export default App;
