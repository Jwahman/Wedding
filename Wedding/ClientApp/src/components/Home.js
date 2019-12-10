import React, { Component } from 'react';
import bay from '../images/bay.jpg';

export class Home extends Component {
  static displayName = Home.name;

  render () {
      return (
          <div style={{ backgroundColor: 'White' }}>
          <img src={bay} alt="Bay" height="500px" width="100%" />
              <ul>
                  <li></li>
                  </ul>
              Hej, vad roligt att just du har hittat hit!
              Det här är vårt egna lilla "krypin", och här kommer du hitta all nödvändig information kring vårt bröllop
                  
              </div>
    );
  }
}
