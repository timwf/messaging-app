import React, { Component } from 'react';
import Recieved from "./Recieved";
import Sent from "./Sent";


class Messages extends Component {

  render() {
    return (
      <div>
      <h2>Messages</h2>
      <Recieved />
      <Sent />
      </div>
    );
  }

}

export default Messages;
