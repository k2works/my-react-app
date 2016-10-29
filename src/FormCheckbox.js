import React, { Component } from 'react';

class FormCheckbox extends React.Component {
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

export default FormCheckbox;
