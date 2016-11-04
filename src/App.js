import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUpDialog from './SignUpDialog'

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
            <SignUpDialog />
        </p>
      </div>
    );
  }
}

export default App;
