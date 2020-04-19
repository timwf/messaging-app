import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Messages from "./components/Messages";
import InputField from "./components/InputField";
import TestComp from "./components/TestComp";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Provider} from 'react-redux'
import store from './newStore'





function App() {


  return (
    <div className="App">

    <Provider store={store}>
            <Header />
            <Messages />
            <InputField />
    </Provider>



    </div>
  );
}

export default App;
