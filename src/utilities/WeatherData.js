import React, { Component, createContext } from "react";
import fetchData from "./fetchData";
import calculateStats from "./calculateStats";

export const WeatherData = createContext();

class WeatherDataProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: {},
      calculatedStatistics: {},
    };
  }


  onSearchCity = async (city) => {
    let data = await fetchData(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=a2b4e52032d2ff195e2ec1133387d853`
    );
    this.setState({
      weatherData: data,
      calculatedStatistics: calculateStats(data),
    });
    console.log(this.state.weatherData);
    console.log(this.state.calculatedStatistics);
  };

  render() {
    return (
      <WeatherData.Provider
        value={{
          weatherData: this.state.weatherData,
          calculatedStats: this.state.calculatedStatistics,
          searchCity: this.onSearchCity,
          searchInputRef: this.serchInput,
          searchBtnRef: this.searchButton,
        }}
      >
        {this.props.children}
      </WeatherData.Provider>
    );
  }
}

export default WeatherDataProvider;
