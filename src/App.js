import React from 'react';
import './App.css';
import Header from "./components/Header";
import Messages from "./components/Messages";
import InputField from "./components/InputField";

function App() {
  return (
    <div className="App">
      <h1>APP</h1>
      <Header />
      <Messages />
      <InputField />
    </div>
  );
}

export default App;
