
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
