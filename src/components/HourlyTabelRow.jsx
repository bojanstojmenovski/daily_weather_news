import React from "react";

const HourlyTableRow = (props) => {
  let hourlyRowBackground = (description) => {
    switch (description) {
      case "clear sky":
        return {
          backgroundImage: `url(${require("../img/clear_sky.jpg")})`,
        };
      case "overcast clouds":
        return {
          backgroundImage: `url(${require("../img/overcast_clouds.jpg")})`,
        };
      case "few clouds":
        return {
          backgroundImage: `url(${require("../img/few_clouds.jpg")})`,
        };
      case "broken clouds":
      case "scattered clouds":
        return {
          backgroundImage: `url(${require("../img/broken_clouds.jpg")})`,
        };
      case "light rain":
      case "moderate rain":
        return {
          backgroundImage: `url(${require("../img/rain.jpg")})`,
        };
      case "snow":
        return {
          backgroundImage: `url(${require("../img/snow.jpg")})`,
        };
      default:
        break;
    }
  };

  return (
    <div
      className="row data-row"
      style={hourlyRowBackground(props.weather[0].description)}
    >
      <div className="col-md-2 hourly-desc">{props.weather[0].description}</div>
      <div className="col-md-2">
        {props.dt_txt.split(" ")[1]}
        {/* {new Date(props.dt * 1000).toUTCString()} */}
      </div>
      <div className="col-md-2">{props.main.temp.toFixed(0)} °C</div>
      <div className="col-md-2">{props.main.humidity} %</div>
      <div className="col-md-2">{props.wind.speed} km/h</div>
    </div>
  );
};

export default HourlyTableRow;
