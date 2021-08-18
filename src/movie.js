
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
