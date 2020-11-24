import React, { useState, useEffect } from 'react';
import Hourly from "./Hourly"
import Statistics from "./Statistics"
import "./css/PageView.css"

const Home = () => {
  let [selectedComponent, setSelectedComponent] = useState("Hourly");

  let renderSelectedComponent = (component) => {
   if (component === "Hourly") {
     return <Hourly/>
   } else if (component === "Statistics") {
     return <Statistics/>
   }
  }

  useEffect(() => {
    renderSelectedComponent(selectedComponent)
  })
  
  return (
    <div className="home-div">
      <h1>Welcome to Daily Weather News</h1>
      <select name="data-type" id="data-type-select" onChange={(e) => {setSelectedComponent(selectedComponent = e.target.value )}}>
            <option>Hourly</option>
            <option>Statistics</option>
      </select>
      {renderSelectedComponent(selectedComponent)}
    </div>
  );
};

export default Home;
