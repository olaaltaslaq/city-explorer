
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
  