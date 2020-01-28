import React, { Component } from 'react';
import './Custom.css';

export class Osa extends Component {
    static displayName = Osa.name;

    constructor(props) {
        super(props);
        this.state =
        {
            accName: '',
            accEmail: '',
            accPhone: '',
            churchToBlomTran: false,
            blomToCenTran: false,
            allergies: '',
            accMessage: '',
            decName: '',
            decEmail: '',
            decPhone: '',
            decMessage: '',
            accept: false,
            decline: false,
            favSong: ''
        };

        this.handleAcceptChange = this.handleAcceptChange.bind(this);
        this.handleDeclineChange = this.handleDeclineChange.bind(this);

        this.handleAccNameChange = this.handleAccNameChange.bind(this);
        this.handleAccEmailChange = this.handleAccEmailChange.bind(this);
        this.handleAccPhoneChange = this.handleAccPhoneChange.bind(this);
        this.handleCtBChange = this.handleCtBChange.bind(this);
        this.handleBtCChange = this.handleBtCChange.bind(this);
        this.handleAllergiesChange = this.handleAllergiesChange.bind(this);
        this.handleFavSongChange = this.handleFavSongChange.bind(this);
        this.handleAccMessageChange = this.handleAccMessageChange.bind(this);

        this.handleDecNameChange = this.handleDecNameChange.bind(this);
        this.handleDecPhoneChange = this.handleDecPhoneChange.bind(this);
        this.handleDecEmailChange = this.handleDecEmailChange.bind(this);
        this.handleDecMessageChange = this.handleDecMessageChange.bind(this);

        this.sendAcceptOSA = this.sendAcceptOSA.bind(this);
    }

    render() {
        return (
            <div className="cornerbordertop">
                <div className="sidemargin">    
                    <h3 className="h3font" style={{marginBottom:'25px'}}>O.S.A.</h3>
                    <p className="bodytext">Nedan finns två formulär för O.S.A. 
                    Det ena är för att acceptera inbjudan och den andra för tacka nej. 
                    Det är helt OK att O.S.A. för flera personer samtidigt. Skriv i sådana fall namnet på dessa personer i <i>Namn</i> -fältet nedan.
                    <br />
                </p>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', justifyContent: 'center' }}>
                        <label className="form-check-input bodytextfat">
                        <input
                            type="checkbox"
                            className="form-check-input "
                            defaultChecked={this.state.accept}
                            checked={this.state.accept}
                            onChange={this.handleAcceptChange}
                        />
                        Jag/Vi accepterar inbjudan med glädje
                    </label>
                </div>

                
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '50px',paddingBottom: '20px', justifyContent: 'center' }}>
                        <label className="form-check-input bodytextfat">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            defaultChecked={this.state.decline}
                            checked={this.state.decline}
                            onChange={this.handleDeclineChange}
                        />
                        Jag/Vi kan tyvärr inte närvara
                    </label>
                </div>
                    {this.state.accept ?
                        <div style={{ border: '1px solid rgba(112, 130, 93, 0.8)', borderRadius: '10px' }}>

                        <h5 className="h5font" style={{marginBottom:'30px',marginTop:'15px', color: 'green' }}>Acceptera</h5>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <label style={{ marginRight: '10px', textAlign: 'right', width: 'auto' }} className="col-sm-3 bodytext">Namn:</label>
                                <input type="text" style={{ marginRight: '10px' }} value={this.state.accName} onChange={this.handleAccNameChange} className="form-control col-sm-6" placeholder="Namn på de som kommer"/>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <label style={{ marginRight: '10px', textAlign: 'right', width: 'auto' }} className="col-sm-3 bodytext">Email:</label>
                                <input type="text" style={{ marginRight: '10px' }} value={this.state.accEmail} onChange={this.handleAccEmailChange} className="form-control col-sm-6" placeholder="Din email" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <label style={{ marginRight: '10px', textAlign: 'right', width: 'auto' }} className="col-sm-3 bodytext">Telefon:</label>
                                <input type="text" style={{ marginRight: '10px' }} value={this.state.accPhone} onChange={this.handleAccPhoneChange} className="form-control col-sm-6" placeholder="Ett telefonnummer vi kan nå dig på" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                <label style={{ marginRight: '10px', textAlign: 'right', width: 'auto' }} className="col-sm-3 bodytext">Skjuts:</label>
                                <input type="checkbox" onChange={this.handleCtBChange} defaultChecked={this.state.churchToBlomTran} style={{ marginBottom: '6px', marginRight: '10px' }} />
                                <label className="bodytext">Skjuts från Alsters Kyrka till Blomsterhult</label>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <label style={{ marginRight: '10px', textAlign: 'right', width: 'auto' }} className="col-sm-3 bodytext"></label>
                                <input type="checkbox" onChange={this.handleBtCChange} defaultChecked={this.state.blomToCenTran} style={{ marginBottom: '6px', marginRight: '10px' }} />
                                <label className="bodytext">Skjuts från Blomsterhult till Karlstad Centrum</label>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <label style={{ marginRight: '10px', textAlign: 'right', width: 'auto' }} className="col-sm-3 bodytext">Allergier/Specialkost:</label>
                                <input type="text" style={{ marginRight: '10px' }} value={this.state.allergies} onChange={this.handleAllergiesChange} className="form-control col-sm-6" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <label style={{ marginRight: '10px', textAlign: 'right', width: 'auto' }} className="col-sm-3 bodytext">Önskelåt till bröllopsfesten:</label>
                                <input type="text" style={{ marginRight: '10px' }} value={this.state.favSong} onChange={this.handleFavSongChange} className="form-control col-sm-6" />
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <label style={{ marginRight: '10px', textAlign: 'right', width: 'auto' }} className="col-sm-3 bodytext">Övrigt:</label>
                                <textarea rows={8} style={{ marginRight: '10px' }} value={this.state.accMessage} onChange={this.handleAccMessageChange} className="form-control col-sm-6" />
                            </div>
                            <button className="btn btn-primary" style={{ marginLeft: '45%', marginBottom: '20px' }} onClick={this.sendAcceptOSA}>Send</button>
                </div>
                    
                    : null}

                {this.state.decline ? 
                        <div style={{ border: '1px solid rgba(112, 130, 93, 0.8)', borderRadius: '10px' }}>
                            <h5 className="h5font" style={{ marginBottom: '30px',marginTop: '15px', color: 'red'  }}>Avböj</h5>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <label style={{ marginRight: '10px', textAlign: 'right', width: 'auto' }} className="col-sm-3 bodytext">Namn:</label>
                                <input type="text" style={{ marginRight: '10px' }} value={this.state.decName} onChange={this.handleDecNameChange} className="form-control col-sm-6" placeholder="Namn på de som inte kommer"/>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <label style={{ marginRight: '10px', textAlign: 'right', width: 'auto' }} className="col-sm-3 bodytext">Email:</label>
                                <input type="text" style={{ marginRight: '10px' }} value={this.state.decEmail} onChange={this.handleDecEmailChange} className="form-control col-sm-6" placeholder="Din email" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <label style={{ marginRight: '10px', textAlign: 'right', width: 'auto' }} className="col-sm-3 bodytext">Telefon:</label>
                                <input type="text" style={{ marginRight: '10px' }} value={this.state.decPhone} onChange={this.handleDecPhoneChange} className="form-control col-sm-6" placeholder="Ett telefonnummer vi kan nå dig på" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <label style={{ marginRight: '10px', textAlign: 'right', width: 'auto' }} className="col-sm-3 bodytext">Övrigt:</label>
                                <textarea rows={8} style={{ marginRight: '10px' }} value={this.state.decMessage} onChange={this.handleDecMessageChange} className="form-control col-sm-6" />
                        </div>
                            <button className="btn btn-primary bodytext" style={{ marginLeft: '45%', marginBottom: '20px' }} onClick={this.sendAcceptOSA}>Send</button>
                            </div>
                        
                : null}
                </div>
        </div>
            
        );
    }
    //Options
    handleAcceptChange(e) {
        this.setState({ accept: e.target.checked });
        if (e.target.checked == true && this.state.decline == true) {
            this.state.decline = false;
        }
    }
    handleDeclineChange(e) {
        this.setState({ decline: e.target.checked });
        if (e.target.checked == true && this.state.accept == true ) {
            this.state.accept = false;
        }
    }

    //Accept
    handleAccNameChange(e) {
        this.setState({ accName: e.target.value });
    }
    handleAccEmailChange(e) {
        this.setState({ accEmail: e.target.value });
    }
    handleAccPhoneChange(e) {
        this.setState({ accPhone: e.target.value });
    }

    handleBtCChange(e) {
        this.setState({ blomToCenTran: !this.state.blomToCenTran });
    }

    handleCtBChange(e) {
        this.setState({  churchToBlomTran: !this.state.churchToBlomTran  });
    }

    handleAllergiesChange(e) {
        this.setState({ allergies: e.target.value });
    }
    handleFavSongChange(e) {
        this.setState({ favSong: e.target.value });
    }

    handleAccMessageChange(e) {
        this.setState({ accMessage: e.target.value });
    }

    //Decline
    handleDecNameChange(e) {
        this.setState({ decName: e.target.value });
    }

    handleDecEmailChange(e) {
        this.setState({ decEmail: e.target.value });
    }

    handleDecPhoneChange(e) {
        this.setState({ decPhone: e.target.value });
    }
                
    handleDecMessageChange(e) {
        this.setState({ decMessage: e.target.value });
    }

    validateEmail(email) {
        const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexp.test(email);
    }
    async sendAcceptOSA() {
        if (this.state.accept) {
            if (this.state.accName.length <= 4) {
                alert("Namn måste innehålla mer än 4 bokstäver");
            }
            else if (!this.validateEmail(this.state.accEmail)) {
                alert("Email är inte korrekt. (exempel@hotmail.se)");
            }
            else if (this.state.accPhone.length <= 9) {
                alert("Telefonnumret måste innehålla minst 10 tecken");
            }
            else {
                const response = await fetch("https://radiant-forest-76748.herokuapp.com/respond",
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            status: true,
                            osaNames: this.state.accName,
                            email: this.state.accEmail,
                            phone: this.state.accPhone,
                            churchToBlomTran: this.state.churchToBlomTran,
                            blomToCenTran: this.state.blomToCenTran,
                            allergies: this.state.allergies,
                            favSong: this.state.favSong,
                            message: this.state.accMessage
                        }),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    });

                if (response.ok == true) {
                    this.setState({
                        accName: '',
                        accEmail: '',
                        accPhone: '',
                        churchToBlomTran: false,
                        blomToCenTran: false,
                        allergies: '',
                        accMessage: '',
                        favSong:'',
                    });
                    alert("Ditt svar har skickat till brudparet!");
                }
                else {
                    alert("Något gick fel. Pröva igen senare eller kontakta brudparet.");
                }
            }          
        }
        else if (this.state.decline) {
            if (this.state.decName.length <= 4) {
                alert("Namn måste innehålla mer än 4 bokstäver");
            }
            else if (!this.validateEmail(this.state.decEmail)) {
                alert("Email är inte korrekt. (exempel@hotmail.se)");
            }
            else if (this.state.decPhone.length <= 9) {
                alert("Telefonnumret måste innehålla minst 10 tecken");
            }
            else  {
                const response = await fetch("https://radiant-forest-76748.herokuapp.com/respond",
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            status: false,
                            osaNames: this.state.decName,
                            email: this.state.decEmail,
                            phone: this.state.decPhone,
                            message: this.state.decMessage
                        }),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    });

                if (response.ok == true) {
                    this.setState({
                        decName: '',
                        decEmail:'',
                        decPhone:'',
                        decMessage:'',
                    });
                    alert("Ditt svar har skickat till brudparet!");
                }
                else {
                    alert("Något gick fel. Pröva igen senare eller kontakta brudparet.");
                }

            }
        }
        else {
            alert("Wopps, det sprängs! Ring supporten!");
        }
        
    }
}