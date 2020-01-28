import React, { Component } from 'react';
import Countdown from './Countdown.jsx';
import './Custom.css';



export class Home extends Component {
    static displayName = Home.name;


    render() {
        const currentDate = new Date();
        const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
      return (

          <div className="cornerbordertop">
              <div className="sidemargin" style={{textAlign:'center' }}>

                  <h3 className="h3font"> V&auml;lkommen till v&aring;r hemsida!</h3><br />
                  <p className="bodytext" style={{marginBottom: '45px'}}>
                      Kul att du hittat hit! P&aring; den h&auml;r sidan hittar du information om vigseln och festen, praktiska detaljer, v&auml;gbeskrivningar etc.<br/>
                      Tveka inte att kontakta oss om du undrar &ouml;ver n&aring;got. Vi ser fram emot att se dig p&aring; v&aring;rt br&ouml;llop!<br />             
                Kram <br/>Johannes & Sofia
 </p>      
                      
            <h3 className="h3font">Bröllopsdag om: </h3>
              <Countdown date={`${year}-07-25T00:00:00`} />
              </div>
          </div>
    );
  }
}




