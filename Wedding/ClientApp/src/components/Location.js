import React, { Component } from 'react';
import Map from 'google-map-react';
import Marker from './Marker';
import './Custom.css';

export class Location extends Component {
    static defaultProps = {
        center: {
            lat: 59.47833333,
            lng: 13.59361111
        },
        zoom: 11
    };
  //}
    // - &aring;
    // - &auml;
    // - &ouml;

  render() {
    return (
        <div className="cornerbordertop" >
            <div className="sidemargin">
            
                <h3 className="h3font" style={{marginBottom:'25px'}}>V&auml;gbeskrivning</h3>
                <p className="bodytext">Vigseln kommer &auml;ga rum i Alsters Kyrka och br&ouml;llopsfesten med middag kommer att h&aring;llas i en loge vid namn Blomsterhult som ligger n&aring;gra kilometer fr&aring;n kyrkan.
                B&aring;da dessa positioner &auml;r utm&auml;rkta p&aring; kartan nedan (h&aring;ll muspekaren &ouml;ver positionerna f&ouml;r att se namn).
                .</p>
                <h5 className="h5font">Alsters kyrka</h5>
                <p className="bodytext"> Med utg&aring;ngspunkt fr&aring;n Karlstad, &aring;k p&aring; E18 &ouml;ster mot Stockholm. Tag avfarten mot till v&auml;g 63/236 mot Ludvika/Filipstad/Hammar&ouml;/Hammar.
                Sv&auml;ng sedan till v&auml;nster in p&aring; v&auml;g 63/236 (skyltar till Ludvika/Filipstad). Tag andra avfarten i rondellen. Forts&auml;tt rakt fram i ca 10 minuter,
                    tag av avfart till h&ouml;ger mot Alsters kyrka.</p>
                <h5 className="h5font">Blomsterhult</h5>
                <p className="bodytext">Med utg&aring;ngspunkt fr&aring;n Alsters Kyrka, k&ouml;r v&auml;nster, s&ouml;derut n&auml;r du kommer ut fr&aring;n kyrkan. Forts&auml;tt rakt fram i ca 150 meter tills du sv&auml;nger till v&auml;nster vid
                    en gul skylt "Blomsterhult". Forts&auml;tt rakt fram, Blomsterhult &auml;r det sista huset p&aring; denna v&auml;g. Efter du passerat en v&auml;gbom kommer du se ett hus rakt fram,
                    h&aring;ll till v&auml;nster s&aring; ser du Blomsterhult rakt fram. V&auml;nligen h&aring;ll h&ouml;ger & parkera bilen p&aring; grusparkeringen (f&ouml;lj anvisningarna p&aring; plats).</p>
            
                        
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
                        color="red"
                    />
                    <Marker
                        lat={59.456210}
                        lng={13.644070}
                        name="Blomsterhult"
                        color="orange"
                    />
                </Map>
            </div>
            <br />
                <h3 className="h3font">Transport</h3>
                <h5 className="h5font">Transport till Alsters Kyrka</h5>
                <p className="bodytext">Skjuts till vigseln i Alsters Kyrka f&aring;r var och en anordna sj&auml;lva.</p>
                <h5 className="h5font">Transport fr&aring;n Alsters Kyrka till Blomsterhult</h5>
                <p className="bodytext">Buss kommer finnas tillg&auml;nglig f&ouml;r transport fr&aring;n Alsters kyrka till Blomsterhult efter vigseln. 
                F&ouml;r att denna transport ska kunna flyta p&aring; s&aring; smidigt s&aring; m&ouml;jligt ber vi er att ange om ni &auml;r i behov av transport n&auml;r ni <b>O.S.A.</b></p>
                <h5 className="h5font">Transport fr&aring;n Blomsterhult till centrum</h5>
                <p className="bodytext">N&auml;r man k&auml;nner sig redo att &aring;ka hem&aring;t s&aring; kommer det finnas transport i form av bil finnas tillg&auml;nglig mellan 22:00-01:00.
                    Transporten kommer endast k&ouml;ra mellan Blomsterhult & Karlstad Centrum. Mer information om denna transport kommer finnas p&aring; br&ouml;llopsfesten.</p>
            
            </div>
        </div>
    );
  }
}
