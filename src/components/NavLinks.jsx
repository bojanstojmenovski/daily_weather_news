import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";

class NavLinks extends Component {
  constructor(props) {
    super(props);

    this.statisticsRef = createRef();
    this.hourlyRef = createRef();
    this.aboutRef = createRef();

    this.state = {
      navLinks: [
        {
          id: 1,
          name: "Statistics",
          path: "/statistics",
          linkRef: this.statisticsRef,
        },
        {
          id: 2,
          name: "Hourly",
          path: "/hourly",
          linkRef: this.hourlyRef,
        },
        {
          id: 3,
          name: "About",
          path: "/about",
          linkRef: this.aboutRef,
        },
      ],
    };
  }

  onActivateItem = (item) => {
    this.statisticsRef.classList.remove("active");
    this.hourlyRef.classList.remove("active");
    this.aboutRef.classList.remove("active");
    item.classList.add("active");
  };

  render() {
    return (
      <div className="nav-links">
        <ul className="navbar-nav mr-auto mt-lg-0">
          <li
            className="nav-item"
            ref={(li) => (this.statisticsRef = li)}
            onClick={() => this.onActivateItem(this.statisticsRef)}
          >
            <Link className="nav-link" to={"/statistics"}>
              Statistics
            </Link>
          </li>
          <li
            className="nav-item"
            ref={(li) => (this.hourlyRef = li)}
            onClick={() => this.onActivateItem(this.hourlyRef)}
          >
            <Link className="nav-link" to={"/hourly"}>
              Hourly
            </Link>
          </li>
          <li
            className="nav-item"
            ref={(li) => (this.aboutRef = li)}
            onClick={() => this.onActivateItem(this.aboutRef)}
          >
            <Link className="nav-link" to={"/about"}>
              About
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavLinks;
