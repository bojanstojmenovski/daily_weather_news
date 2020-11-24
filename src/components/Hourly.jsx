import React, { useContext } from "react";
import { WeatherData } from "../utilities/WeatherData";
import HourlyTableRow from "./HourlyTabelRow";

const Hourly = () => {
  const { weatherData } = useContext(WeatherData);

  return (
    <div className="hourly-div">
      {weatherData.city && ( <h1>Hourly Weather Report for {weatherData.city.name}</h1> )}
      {weatherData.city && ( <p>
        {" "}
        <i>
          Here you can read the hourly weather report for the following days.
          Keep in mind that it is not actually every hour, but every 3 - 5 hours
        </i>{" "}
      </p> )}
      {!weatherData.city && ( <p>
        <i>Please enter a city in the Search bar to see the Hourly Weather Report</i>
      </p> )}
      {weatherData.list && (
        <div className="hourly-result">
          <div className="row">
            <div className="col-md-2">Description</div>
            <div className="col-md-2">Time</div>
            <div className="col-md-2">Temperature</div>
            <div className="col-md-2">Humidity</div>
            <div className="col-md-2">Wind Speed</div>
          </div>
          {weatherData.list.map((item, id) => (
            <HourlyTableRow {...item} key={id} />
          ))}
        </div>
      )}
    </div>
  );
}; 

export default Hourly;
