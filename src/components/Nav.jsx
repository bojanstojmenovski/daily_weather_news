import React, { Component, createRef } from "react";
import logo from "../img/logo.svg";
import "./css/Nav.css";

import NavLinks from "./NavLinks";
import Search from "./Search";
import { WeatherData } from "../utilities/WeatherData";

class Nav extends Component {
  static contextType = WeatherData;
  constructor(props) {
    super(props);

    this.state = {
      helper: true,
    };
  }

  collapseNavRef = createRef();

  onToglerClick = () => {
    if (!this.state.helper) {
      this.collapseNavRef.classList.remove("show");
      this.setState({
        helper: true,
      });
    } else {
      this.collapseNavRef.classList.add("show");
      this.setState({
        helper: false,
      });
    }
  };

  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-dark ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.onToglerClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarTogglerDemo01"
          ref={(div) => (this.collapseNavRef = div)}
        >
          <a className="navbar-brand" href="/">
            <img src={logo} width="30" height="30" alt="cloudy sun" />
          </a>
          <NavLinks />
          <Search />
        </div>
      </div>
    );
  }
}

export default Nav;
