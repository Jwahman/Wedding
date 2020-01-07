import React, { Component } from 'react';
import './Custom.css';

export class Osa extends Component {
    static displayName = Osa.name;

    constructor(props) {
        super(props);
        this.state = { osaNames: '' };

        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.sendOSA = this.sendOSA.bind(this);
    }

    render() {
        return (
            <div>
                    <input type="text" value={this.state.osaNames} onChange={this.handleChange} className="form-control col-sm-4" />
                <button className="btn btn-primary" onClick={this.sendOSA}>Send</button>
                </div>

        );
    }

    handleChange(e) {
        this.setState({ osaNames: e.target.value });
        console.log(this.state.osaNames);
    }

    async sendOSA() {
        const test = this.state.osaNames;
        const response = await fetch("osa",
            {
                method: 'POST',
                body: JSON.stringify({
                    subject: this.state.osaNames,
                    message: ''
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
        const data = response.json();
    }
}