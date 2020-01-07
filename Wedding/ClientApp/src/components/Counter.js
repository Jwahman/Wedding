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
    // - &aring;
    // - &auml;
    // - &ouml;

  render() {
    return (
        <div >

            
                <h3>V&auml;gbeskrivning</h3>
            <p>Br&ouml;llopet kommer h&aring;llas i Alters Kyrka och festen kommer att h&aring;llas i Blomsterhult n&aring;gra kilometer fr&aring;n kyrkan.<br/>
                B&aring;da dessa postioner &auml;r urm&auml;rkta p&aring; kartan nedan (h&aring;ll muspekaren &ouml;ver postionerna f&ouml;r att se namn).</p>
                <h5>Alsters kyrka</h5>
    <p>Fr&aring;n Karlstad, &aring;k p&aring; E18 &ouml;ster mot Stockholm. Ta avfarten mot till v&auml;g 63/236 mot Ludvika/Filipstad/Hammar&ouml;/Hammar. 
                Sv&auml;ng sedan till v&auml;nster in p&aring; v&auml;g 63/236 (skyltar till Ludvika/Filipstad). Tag andra avfarten i rondellen. Forts&auml;tt rakt fram i ca 10 minuter, tag av avfart till h&ouml;ger mot Alsters kyrka.</p>
            <h5>Blomsterhult</h5>
            <p>K&ouml;r v&auml;nster, s&ouml;derut n&auml;r du kommer ut fr&aring;n kyrkan. Forts&auml;tt rakt fram i ca 150 meter tills du sv&auml;nger till v&auml;nster vid en gul skylt "Blomsterhult. Forts&auml;tt rakt fram, Blomsterhult &auml;r det sista huset p&aring; denna v&auml;g. 
                            Efter du passerat en v&auml;gbom kommer du se ett hus rakt fram, h&aring;ll till v&auml;nster s&aring; ser du Blomsterhult rakt fram. V&auml;nligen h&aring;ll h&ouml;ger & parkera bilen p&aring; grusparkeringen.</p>
            
                        
            <div style={{ height: '50vh', width: '100%' }}>
                <Map
                    bootstrapURLKeys={{ key: 'AIzaSyBo9L3 - 8wKzvd4fFj3VGxqh8gqcGtTbtlQ' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Marker
                        lat={59.47833333}
                        lng={13.59361111}
                        name="Alsters Kyrka"
                        color="blue"
                    />
                    <Marker
                        lat={59.456210}
                        lng={13.644070}
                        name="Blomsterhult"
                        color="green"
                    />
                </Map>
            </div>
            <br />
            <h3>Transport</h3>
            <h5>Transport till Alsters Kyrka</h5>
            <p>Skjuts till sj&auml;vla vigseln i Alsters Kyrka f&aring;r var och en sj&auml;vla st&aring; f&ouml;r.</p>
            <h5>Transport fr&aring;n Alsters Kyrka till Blomsterhult</h5>
            <p>Buss kommer finnas tillg&auml;nglig f&ouml;r transport fr&aring;n Alsters kyrka till Blomsterhult efter vigseln. <br />
                F&ouml;r att denna transport ska kunna flyta p&aring; s&aring; smidigt s&aring; m&ouml;jligt ber vi er att ange om ni &auml;r i behov av denna n&auml;r ni <b>O.S.A.</b></p>
            <h5>Transport fr&aring;n Blomsterhult till centrum</h5>
            <p>N&auml;r man blir sugen p&aring; att &aring;ka hemm&aring;t s&aring; kommer transport i form av bil finnas mellan 10.00-01.00.<br />
                Mer information om denna transport kommer finnas p&aring; br&ouml;llopet.</p>
            
                </div>
    );
  }
}
//<p>This is a simple example of a React component.</p>

//    <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

//    <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
