import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

//export class Counter extends Component {
//    static displayName = Counter.name;

    const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
export class Counter extends Component {
    static defaultProps = {
        center: {
            lat: 59.28425,
            lng: 13.35368
        },
        zoom: 11
        //59°28'42.5"N 13°35'36.8"E
    };

  //constructor(props) {
  //  super(props);
  //  this.state = { currentCount: 0 };
  //  this.incrementCounter = this.incrementCounter.bind(this);
  //}

  //incrementCounter() {
  //  this.setState({
  //    currentCount: this.state.currentCount + 1
  //  });
  //}

  render() {
    return (
        <div style={{ backgroundColor: '#FFFFFF' }}>
                <h1>Transport och V&auml;gbeskirvning</h1>
                Hej det här är ett test
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBo9L3 - 8wKzvd4fFj3VGxqh8gqcGtTbtlQ' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.28425}
                        lng={13.35368}
                    text="My Marker"
                />
                </GoogleMapReact>
            </div>
            
            
      </div>
    );
  }
}

//<p>This is a simple example of a React component.</p>

//    <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

//    <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
