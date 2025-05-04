import React from "react";
import "./FirstPage.css";
import carImage from "../images/car.jpg";
import Navbar from "./Navbar.js"; 

const FirstPage = () => {
  return (
    <div>
      <Navbar /> 
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Find your Perfect Car Match</h1>
            <p>
              Compare models, features, and prices to make an informed decision on
              your next car purchase.
            </p>
            <div className="hero-buttons">
              <button className="FirstButton">Start Comparing</button>
              <button className="SecondButton">Car Finder Quiz</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={carImage} alt="Car" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
