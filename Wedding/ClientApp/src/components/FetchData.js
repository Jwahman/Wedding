import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true};
  }

  componentDidMount() {
      this.populateWeatherData();
      //this.sendOSA();
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
    //let contents = this.state.loading
    //? <p><em>Loading...</em></p>
    //: FetchData.renderForecastsTable(this.state.forecasts);
    //<h1 id="tabelLabel" >Weather forecast</h1>
      //  <p>This component demonstrates fetching data from the server.</p>
    //{contents}
  render() {
    

    return (
        <div className="cornerbordertop">
            <h3>Information</h3>
            
            <p>Vi &auml;lskar barn, men under denna dag vill vi ha en vuxenfest med allt vad det inneb&auml;r. Ammande sp&auml;dbarn &auml;r givetvis v&auml;lkomna, men om m&ouml;jligt - l&auml;mna g&auml;rna &auml;ldre barn hemma d&aring; middag och fest inte &auml;r barnanpassade.</p>
            <p>Det viktigaste f&ouml;r oss &auml;r att f&aring; dela v&aring;r dag med er. Vill ni &auml;nd&aring; ge oss en g&aring;va &auml;r bidrag till en 
            kommande br&ouml;llopsresa det vi &ouml;nskar oss allra mest. S&aring; skriver ni erat kontonummer (br&ouml;llopskonto?) under.</p>
            
            <p>Om ni &ouml;nskar att framf&ouml;ra n&aring;got under festen/middagen s&aring; finner ni mer information om hur ni ska g&aring; tillv&auml;ga under "Toastmaster & Toastmadame".</p>
            <h5>Kl&auml;dsel</h5>
            <p>Kl&auml;dsel: Kavaj
            Det inneb&auml;r m&ouml;rk kostym f&ouml;r herrarna och kl&auml;nning eller kjol av finare tyg f&ouml;r damerna.</p>
        <h3>Kontakt</h3>
            <p>Ni kan n&aring; oss (brudparet) genom att maila eventuella fr&aring;gor till <a href="mailto:jesswed2020@hotmail.com">jesswed2020@hotmail.com</a></p>

        </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
    }

    async sendOSA() {
        const response = await fetch("osa",
        {
            method: 'POST',
                body: JSON.stringify({
                    title: 'New title added',
                    body: 'New body added. Hello body.',
                    userId: 2
                }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            });
        const data = response.json();
    }
}
