import React, { Component } from 'react';

class FormRadioButton extends React.Component {
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

export default FormRadioButton;
