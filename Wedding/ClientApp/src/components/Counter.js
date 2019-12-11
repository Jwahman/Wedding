import React, { Component } from 'react';
import Map from 'google-map-react';
import Marker from './Marker';

export class Counter extends Component {
    static defaultProps = {
        center: {
            lat: 59.47833333,
            lng: 13.59361111
        },
        zoom: 11
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
            <div style={{ height: '50vh', width: '100%' }}>
                <Map
                    bootstrapURLKeys={{ key: 'AIzaSyBo9L3 - 8wKzvd4fFj3VGxqh8gqcGtTbtlQ' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Marker
                        lat={59.47833333}
                        lng={13.59361111}
                        name="My Marker"
                        color="blue"
                    />
                </Map>
            </div>
            
            
      </div>
    );
  }
}
//<p>This is a simple example of a React component.</p>

//    <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

//    <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
