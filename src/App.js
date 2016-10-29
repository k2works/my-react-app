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
            <Form />
            <Form2 />
            <Form3 />
            <Form4 />
            <Form5 />
            <Form6 />
            <Form7 />
        </p>
      </div>
    );
  }
}

export default App;

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Text field value is: ' + this.state.value);
    }

    render() {
        return (
            <div>
                <input type="text"
                       placeholder="Hello!"
                       value={this.state.value}
                       onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        );
    }
}

class Form2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // Note: with uncontrolled inputs, you don't
        // have to put the value in the state.
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Text field value is: ' + this.state.value);
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Hello!"
                    onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        );
    }
}

class Form3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Text field value is: ' + this.state.value);
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="edit me"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        );
    }
}

class Form4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Textarea value is: ' + this.state.value);
    }

    render() {
        return (
            <div>
        <textarea
            name="description"
            value={this.state.value}
            onChange={this.handleChange}
        />
                <br />
                <button onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        );
    }
}

class Form5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'B'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Select value is: ' + this.state.value);
    }

    render() {
        return (
            <div>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="A">Apple</option>
                    <option value="B">Banana</option>
                    <option value="C">Cranberry</option>
                </select>
                <button onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        );
    }
}

class Form6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'B'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Radio button value is: ' + this.state.value);
    }

    render() {
        return (
            <div>
                <label>
                    <input
                        type="radio"
                        name="choice"
                        value="A"
                        onChange={this.handleChange} />
                    Option A
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="choice"
                        value="B"
                        onChange={this.handleChange}
                        defaultChecked={true} />
                    Option B
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="choice"
                        value="C"
                        onChange={this.handleChange} />
                    Option C
                </label>
                <br />
                <br />
                <button onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        );
    }
}

class Form7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checked: {'A': false, 'B': true, 'C': false}};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        // Copy the object so we don't mutate the old state.
        // (This requires an Object.assign polyfill):
        const checked = Object.assign({}, this.state.checked)
        if (!checked[value]) {
            checked[value] = true;
        } else {
            checked[value] = false;
        };
        this.setState({checked});
    }

    handleSubmit(event) {
        alert('Boxes checked: ' +
            (this.state.checked.A ? 'A ' : '') +
            (this.state.checked.B ? 'B ' : '') +
            (this.state.checked.C ? 'C' : '')
        );
    }

    render() {
        return (
            <div>
                <label>
                    <input
                        type="checkbox"
                        value="A"
                        onChange={this.handleChange} />
                    Option A
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="B"
                        onChange={this.handleChange}
                        defaultChecked={true} />
                    Option B
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="C"
                        onChange={this.handleChange} />
                    Option C
                </label>
                <br />
                <br />
                <button onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        );
    }
}
