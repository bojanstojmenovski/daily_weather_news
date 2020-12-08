import React, { useContext } from "react";
import "./css/PageView.css";
import { WeatherData } from "../utilities/WeatherData";

const Statistics = () => {
  const { weatherData, calculatedStats } = useContext(WeatherData);
  const { temperature, humidity, warmestTime, coldestTime } = calculatedStats;
  return (
    <div className="stats-div">
      {weatherData.city && ( <h1>Statistics of the day for {weatherData.city.name}</h1> )}
      {!weatherData.city && ( <p>Please enter a city in the Search bar to see the Daily Statistics</p> )}
      {temperature && (
        <div className="stats-result">
          <div className="row">
            {temperature && (
              <div className="col-md-6">
                Highest temperature: {temperature.max.toFixed()} °C
              </div>
            )}
            {humidity && (
              <div className="col-md-6">Highest humidity: {humidity.max.toFixed()} %</div>
            )}
          </div>
          <div className="row">
            {temperature && (
              <div className="col-md-6">
                Average temperature: {temperature.avg.toFixed()} °C
              </div>
            )}
            {humidity && (
              <div className="col-md-6">
                Average humidity: {humidity.avg.toFixed()} %
              </div>
            )}
          </div>
          <div className="row">
            {temperature && (
              <div className="col-md-6">
                Lowest temperature: {temperature.min.toFixed()} °C
              </div>
            )}
            {humidity && (
              <div className="col-md-6">Lowest humidity: {humidity.min.toFixed()} %</div>
            )}
          </div>
          {warmestTime && (
            <h3 className="warmest-period">
              Warmest time of the following period: {warmestTime}
            </h3>
          )}
          {coldestTime && (
            <h3 className="coldest-period">
              Coldest time of the following period: {coldestTime}
            </h3>
          )}
        </div>
      )}
    </div>
  );
}; 

export default Statistics;
