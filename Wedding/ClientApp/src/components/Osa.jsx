import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
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
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                    <label style={{ marginRight: '15px', textAlign: 'right'}} className="col-sm-2">Namn:</label>
                    <input type="text" value={this.state.osaNames} onChange={this.handleChange} className="form-control col-sm-6" />
                    <button className="btn btn-primary" onClick={this.sendOSA}>Send</button>
                    
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px'  }}>
                    <label style={{ marginRight: '15px', textAlign: 'right' }} className="col-sm-2">Meddelande:</label>
                    <input type="text" value={this.state.osaNames} onChange={this.handleChange} className="form-control col-sm-6" />
                    <button className="btn btn-primary" onClick={this.sendOSA}>Send</button>

                </div>
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