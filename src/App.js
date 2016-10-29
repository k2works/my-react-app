import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
            {element}
            {element1_2}
            {element1_3}
            {element1_4}
            {element1_5}
            {element1_6}
            {element1_7}
            {element2_1}
        </p>
      </div>
    );
  }
}

export default App;

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

var user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

user = null;

const element1_2 = (
    <h1>
        {getGreeting(user)}
    </h1>
);

var user = {
    firstName: 'k2works',
    lastName: '',
    avatarUrl: 'https://avatars0.githubusercontent.com/u/3236312?v=3&s=466'
};

const element1_3 = <div tabIndex="0"></div>;
const element1_4 = <img src={user.avatarUrl}></img>;

const element1_5 = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);

const element1_6 = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);
const element1_7 = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);

const element2_1 = (
    <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
);
