import React, { useState, useEffect, createRef } from 'react';
import Hourly from "./Hourly"
import Statistics from "./Statistics"
import "./css/PageView.css"

const Home = () => {
  let [selectedComponent, setSelectedComponent] = useState("Hourly");

  let hourlyDataTypeRef = createRef();
  let statsDataTypeRef = createRef();

  let renderSelectedComponent = (component) => {
   if (component === "Hourly") {
     return <Hourly/>
   } else if (component === "Statistics") {
     return <Statistics/>
   }
  }

  const handleDataTypeOnClick = (component, item) => {
    setSelectedComponent(selectedComponent = component)
    hourlyDataTypeRef.classList.remove("active-dt");
    statsDataTypeRef.classList.remove("active-dt");
    item.classList.add("active-dt");
  }

  useEffect(() => {
    renderSelectedComponent(selectedComponent)
  })
  
  return (
    <div className="home-div">
      <h1>Welcome to Daily Weather News</h1>
      <div className="data-type-select">
        <div
          className="hourly-data-type data-type"
          ref={(div) => (hourlyDataTypeRef = div)}
          onClick={() => handleDataTypeOnClick("Hourly", hourlyDataTypeRef)} 
        >
          Hourly
        </div>

        <div 
          className="stats-data-type data-type" 
          ref={(div) => (statsDataTypeRef = div)}
          value="Statistics"
          onClick={() => handleDataTypeOnClick("Statistics", statsDataTypeRef)}
        >
          Statistics
        </div>
      </div>
      {renderSelectedComponent(selectedComponent)}
    </div>
  );
};

export default Home;
