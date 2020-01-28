import React, { Component } from 'react';
import Select from 'react-select'
import erika from '../images/erika.png';
import joakim from '../images/joakim.png';
import './Custom.css';

export class Toast extends Component {
    static defaultProps = {
        center: {
            lat: 59.47833333,
            lng: 13.59361111
        },
        zoom: 11
    };


    constructor(props) {
        super(props);
        this.state =
        {
            Name: '',
            Email: '',
            Phone: '',
            Minutes: 5,
            options: [
                {
                    text: "Hålla tal",
                    value: "tal"
                },
                {
                    text: "Spexa",
                    value: "spex"
                },
                {
                    text: "Sjunga",
                    value: "sjunga"
                },
                {
                    text: "Annat",
                    value: "annat"
                }
            ],
            selectedOption: '',
            Message: '',
            Material:''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleMaterialChange = this.handleMaterialChange.bind(this);

        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);

        this.sendEvent = this.sendEvent.bind(this);

    }

    render() {
        return (
            <div className="cornerbordertop">
                <div className="sidemargin">
                    <h3 className="h3font" style={{ marginBottom: '25px' }}>Toastmasters</h3>
                    <p className="bodytext">Deras uppgift blir att pussla ihop hela festkvällen. Vill ni hålla tal eller göra något annat spexigt,
                        vänligen meddela dem så snart som möjligt genom att fylla i formuläret nedan. De behöver veta vad du ska göra, hur lång tid det tar och om du behöver
                        någon rekvisita (t ex ljudanläggning eller projektor). Om ni har andra frågor kring bröllopsfesten & framträdanden kan ni nå dem via: 
                        <a href="mailto:jesswed2020toast@gmail.com">jesswed2020toast@gmail.com</a> eller via angivna telefonnummer nedan.</p>

                    <h5 className="h5font">Erika Granqvist</h5>
                    
                    <div className="toast-erika" style={{display: 'inline-flex'}}>
                        <p className="bodytext" style={{ width: '85%' }}>Erika är barndomskompis med bruden! Hon har alltid skratt & leende nära tills hand, men misströsta ej - hon kan säga ifrån. Hon är minsann den perfekta toastmadamen. Hon är en idéspruta och hon kan styra upp & hantera i princip vilken situation som helst (även brudens lilla kontrollbehov). Med henne vid spakarna kan man luta sig tillbaka och känna sig trygg.
                        Vill du komma i kontakt med Erika finns hon på tel: 070-369 65 90.</p>
                        <img src={erika} style={{ width: '100px', height: '100px', marginLeft: '35px' }}></img>
                    </div>

                    <h5 className="h5font">Joakim Wahman</h5>
                    <div className="toast-jocke" style={{ display: 'inline-flex' }}>
                        <img src={joakim} style={{ width: '100px', height: '100px', marginRight: '35px' }}></img>
                        <p className="bodytext" style={{ width: '85%' }}>Joakim läste till dataingenjör på Karlstad Universitet samtidigt som brudgummen. Deras gemensamma intressen var drakar och bilar, något de fortfarande tycker väldigt mycket om. Joakim är en charmig och väldigt trevlig västgöting med ett sinne för humor. 
                            Han är även gift och har därmed bra insikt i hur saker och ting kan anordnas inför ett bröllop.  
                            Detta gör honom till ett klockrent val som toastmaster. Vill du komma i kontakt med Joakim finns han på tel: 076-102 29 71.
                        </p>
                        
                    </div>
                    <div style={{ border: '1px solid rgba(112, 130, 93, 0.8)', borderRadius: '10px' }}>
                        <h5 className="h5font" style={{ marginBottom: '30px', marginTop: '15px'}}>Framförande</h5>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <label style={{ marginRight: '10px', textAlign: 'right', width: 'auto'}} className="col-sm-3 bodytext">Namn:</label>
                            <input type="text" style={{marginRight: '10px', }} value={this.state.Name} onChange={this.handleNameChange} className="form-control col-sm-6" placeholder="Namn på de som vill framföra något" />
                    </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', width: 'auto'  }}>
                            <label style={{ marginRight: '10px', textAlign: 'right', width: 'auto' }} className="col-sm-3 bodytext">Email:</label>
                            <input type="text" style={{ marginRight: '10px', }} value={this.state.Email} onChange={this.handleEmailChange} className="form-control col-sm-6" placeholder="Din email" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <label style={{ marginRight: '10px', textAlign: 'right', width: 'auto' }} className="col-sm-3 bodytext">Telefon:</label>
                            <input type="text" style={{ marginRight: '10px', }} value={this.state.Phone} onChange={this.handlePhoneChange} className="form-control col-sm-6" placeholder="Ett telefonnummer vi kan nå dig på" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <label style={{ marginRight: '10px', textAlign: 'right', width: 'auto' }} className="col-sm-3 bodytext" bodytext>Jag/Vi vill:</label>
                            <select value={this.state.selectedOption} style={{ marginRight: '10px' }} onChange={(e) => this.setState({ selectedOption: e.target.value })} className="browser-default custom-select form-control col-sm-6">
                            {this.state.options.map((option) => <option key={option.value} value={option.value}>{option.text}</option>)}
                            </select>
                            
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <label style={{ marginRight: '10px', textAlign: 'right', width: 'auto'  }} className="col-sm-3 bodytext">Antal minuter:</label>
                            <div className="def-number-input number-input" style={{ marginRight: '10px' }}>
                            <button onClick={this.decrease} className="minus"></button>
                            <input className="quantity" name="quantity" value={this.state.Minutes} onChange={() => console.log('change')}
                                type="number" />
                            <button onClick={this.increase} className="plus"></button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <label style={{ marginRight: '10px', textAlign: 'right', width: 'auto'  }} className="col-sm-3 bodytext">Eventuellt material:</label>
                            <input type="text" style={{ marginRight: '10px' }} value={this.state.Material} onChange={this.handleMaterialChange} className="form-control col-sm-6" placeholder="Om du/ni behöver projektor, ljudanläggning etc" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <label style={{ marginRight: '10px', textAlign: 'right', width: 'auto'  }} className="col-sm-3 bodytext">Meddelande:</label>
                            <textarea rows={8} style={{ marginRight: '10px' }} value={this.state.Message} onChange={this.handleMessageChange} className="form-control col-sm-6" placeholder="Beskriv lite kort vad du/ni vill framföra" />
                        </div>
                        <button className="btn btn-primary" style={{ marginLeft: '45%', marginBottom: '20px' }} onClick={this.sendEvent}>Send</button>
                        </div>
                    
                    </div>

                </div>
        );
    }

    handleNameChange(e) {
        this.setState({ Name: e.target.value });
    }
    handleEmailChange(e) {
        this.setState({ Email: e.target.value });
    }
    handlePhoneChange(e) {
        this.setState({ Phone: e.target.value });
    }
    handleMessageChange(e) {
        this.setState({ Message: e.target.value });
    }
    handleMaterialChange(e) {
        this.setState({ Material: e.target.value });
    }

    decrease()  {
        this.setState({ Minutes: this.state.Minutes - 1 });
    }

    increase() {
        this.setState({ Minutes: this.state.Minutes + 1 });
    }

    validateEmail(email) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
}

    async sendEvent() {
        if (this.state.Name.length <= 4)
        {
            alert("Namn måste innehålla mer än 4 bokstäver");
        }
        else if (!this.validateEmail(this.state.Email)) {
            alert("Email är inte korrekt. (exempel@hotmail.se)");
        }
        else if (this.state.Phone.length <= 9) {
            alert("Telefonnumret måste innehålla minst 10 tecken");
        }
        else
        {
            const response = await fetch("https://radiant-forest-76748.herokuapp.com/send",
                {
                    method: 'POST',
                    body: JSON.stringify({
                        names: this.state.Name,
                        email: this.state.Email,
                        phone: this.state.Phone,
                        minutes: this.state.Minutes,
                        selectedOption: this.state.selectedOption,
                        material: this.state.Material,
                        message: this.state.Message
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                });

            if (response.ok == true) {
                this.setState({
                    Name:'',
                    Email: '',
                    Phone: '',
                    Minutes: 5,
                    selectedOption: '',
                    Material: '',
                    Message: ''
                });

                alert("Ditt framförnade har skickat till brudparet!");
            }
            else {
                alert("Något gick fel. Pröva igen senare eller kontakta brudparet.");
            }
        }
                
    }
}
