import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      searchCity: '',
      showData: false
    }
  }

  getLocation = async (e) => {
    console.log('inside get location function')
    e.preventDefault();

    await this.setState({
      searchCity: e.target.city.value
    })

    let locURL = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchCity}&format=json`;
    let resultData = await axios.get(locURL)

    this.setState({
      cityData: resultData.data[0],
      showData: true
    })

    // console.log(this.state.cityData)
  }

  
  getWeather = async (e) => {
    console.log('inside get location function')
    e.preventDefault();

    await this.setState({
      searchCity: e.target.city.value
    })

    let weatherURL = `https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=${process.env.REACT_APP_WEATHERBIT_KEY}`;
    let resultData = await axios.get(weatherURL)

    this.setState({
      cityData: resultData.data[0],
      showData: true
    })

    // console.log(this.state.cityData)
  }

  
  getMovie = async (e) => {
    console.log('inside get location function')
    e.preventDefault();

    await this.setState({
      searchCity: e.target.city.value
    })

    let movieURL = `/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`;
    let resultData = await axios.get(movieURL)

    this.setState({
      cityData: resultData.data[0],
      showData: true
    })

    // console.log(this.state.cityData)
  }


  render() {
    return (
      <div>
        <>
          <h1>City Explorer</h1>
          <form onSubmit={this.getLocation}>
            <input type='text' placeholder='Enter city' name='city' />
            <button>Git City</button>
          </form>

          {this.state.showData &&
            <p>{this.state.searchCity} Lat:{this.state.cityData.lat} / Lon:{this.state.cityData.lon} </p>
          } 

          {this.state.showData &&
            <p>{this.state.searchCity} <img src="{`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=Latitude [-90 to 90], Longitude [-180 to 180],<longitude>&zoom=[0 to 18]&size=300x300&format=jpg&maptype=<string>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`
          }" alt="map" /> </p>
          }
          
        </>
      </div>
    )
  }
}

export default App;
