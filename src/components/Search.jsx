import React, { useContext, createRef } from "react";
import { WeatherData } from "../utilities/WeatherData";

const Search = (props) => {
  let { searchCity } = useContext(WeatherData);
  let searchInputRef = createRef();
  return (
    <div className="searchFormDiv">
      <form className="form-inline my-2 my-lg-0">
        <input
          id="citySearchInput"
          className="form-control mr-sm-2"
          type="search"
          placeholder="Enter City Here"
          autoComplete="off"
          ref={(input) => (searchInputRef = input)}
        />
        <img
          id="citySearchBtn"
          src={require("../img/icons/search_white.png")}
          alt="icon"
          className="btn btn-outline-light my-2 my-sm-0"
          onClick={() => searchCity(searchInputRef.value)}
        />
      </form>
    </div>
  );
};

export default Search;
