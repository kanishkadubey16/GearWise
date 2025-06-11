// FirstPage.js
import React from "react";
import { useNavigate } from "react-router-dom";

import "./FirstPage.css";
import carImage from "../assets/car.jpg";
import Navbar from "./Navbar";
import FilterSearch from "./FilterSearch";

const FirstPage = () => {
  const navigate = useNavigate();

  const handleStartComparing = () => {
    navigate("/second");
  };

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
              <button className="FirstButton" onClick={handleStartComparing}>
                Start Comparing
              </button>
              <button className="SecondButton">Car Finder Quiz</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={carImage} alt="Car" />
          </div>
        </div>
      </div>
      <FilterSearch />
    </div>
  );
};

export default FirstPage;
