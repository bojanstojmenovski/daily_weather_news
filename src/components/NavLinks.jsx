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
          name: "Home",
          path: "/",
          linkRef: this.homeRef,
        },
        {
          id: 2,
          name: "About",
          path: "/about",
          linkRef: this.aboutRef,
        },
      ],
    };
  }

  onActivateItem = (item) => {
    this.homeRef.classList.remove("active");
    this.aboutRef.classList.remove("active");
    item.classList.add("active");
  };

  render() {
    return (
      <div className="nav-links">
        <ul className="navbar-nav mr-auto mt-lg-0">
          <li
            className="nav-item active"
            ref={(li) => (this.homeRef = li)}
            onClick={() => this.onActivateItem(this.homeRef)}
          >
            <Link className="nav-link" to={"/"}>
              Home
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
