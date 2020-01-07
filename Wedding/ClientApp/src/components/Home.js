import React, { Component } from 'react';
import './Custom.css';

export class Home extends Component {
  static displayName = Home.name;

  render () {
      return (
          <div className="cornerbordertop">
              
              <p>V&auml;lkommen till v&aring;rt lilla kryp-in! Att just du hittade hit gl&auml;djer oss.<br/> 
Syftet med v&aring;r hemsida &auml;r att den ska guida er & f&ouml;rhoppningsvis svara p&aring; alla era fr&aring;gor eller funderingar inf&ouml;r v&aring;rt stundande br&ouml;llop. <br/>
Uppe till h&ouml;ger finner ni ett antal flikar d&auml;r man kan hitta mer specifik information om plats, resv&auml;g, kontaktinformation etc. </p>

                  
          </div>
    );
  }
}
