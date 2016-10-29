import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle'
import LoggingButton from './LoggingButton'

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
            <ActionLink /><br/>
            <Toggle /><br/>
            <LoggingButton />
        </p>
      </div>
    );
  }
}

export default App;

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    );
}
