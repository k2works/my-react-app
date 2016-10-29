import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './Page'
import Mailbox from './Mailbox'
import LoginControl from './LoginControl'

class App extends Component {
    render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            <h1>Hello, world!</h1>
            <Greeting isLoggedIn={false} />
            <LoginControl />
            <Mailbox unreadMessages={messages} />
            <Page />
        </p>
      </div>
    );
  }
}

export default App;

const messages = ['React', 'Re: React', 'Re:Re: React'];

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}
