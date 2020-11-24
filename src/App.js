import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import WeatherDataProvider from "./utilities/WeatherData";

function App() {
  return (
    <div className="App">
      <Router>
        <WeatherDataProvider>
          <Nav />
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/about"} component={About} />
          </Switch>
        </WeatherDataProvider>
      </Router>
    </div>
  );
}

export default App;
