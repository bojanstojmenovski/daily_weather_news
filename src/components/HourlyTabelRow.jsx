import React from "react";

const HourlyTableRow = (props) => {
  let iconChange = (description) => {
    switch (description) {
      case "clear sky":
        return require("../img/icons/sun.svg")
      case "overcast clouds":
        return require("../img/icons/cloud.svg")
      case "few clouds":
        case "scattered clouds":
          case "broken clouds":
            return require("../img/icons/few_clouds.svg")
      case "light rain":
      case "moderate rain":
        return require("../img/icons/rain.svg")
      case "snow":
        return require("../img/icons/snow.png")
      default:
        break;
    }
  };

  return (
    <div
      className="row data-row"
    >
      <div className="col-md-2"><img src={iconChange(props.weather[0].description)} alt="icon" className="icon"/></div>
      <div className="col-md-2">
        {new Date(props.dt * 1000).toDateString().split(" ")[0]}
      </div>
      <div className="col-md-2">
        {props.dt_txt.split(" ")[1].substring(0, 5)}
      </div>
      <div className="col-md-2 hourly-desc">{props.weather[0].description}</div>
      <div className="col-md-2">{props.main.temp.toFixed(0)} °C</div>
      {/* <div className="col-md-2">{props.main.humidity} %</div> */}
      {/* <div className="col-md-2">{props.wind.speed} km/h</div> */}
    </div>
  );
};

export default HourlyTableRow;
