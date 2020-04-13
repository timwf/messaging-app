import React from 'react';
import './App.css';
import Header from "./components/Header";
import Messages from "./components/Messages";
import InputField from "./components/InputField";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Store from './store'

const useStyles = makeStyles({


});


function App() {
    const classes = useStyles();
  return (
    <div className="App">
            <Store>
            <Header />
            <Messages />
            <InputField />
        </Store>

    </div>
  );
}

export default App;
