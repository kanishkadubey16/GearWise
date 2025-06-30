import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./FirstPage.css";
import carImage from "../assets/car.jpg";
import carData from "../data/carData"; 
import Navbar from "./Navbar";
import FilterSearch from "./FilterSearch";

const FirstPage = ({ standalone = false }) => {
  const navigate = useNavigate();

  const [filteredCars, setFilteredCars] = useState(carData);

  const handleStartComparing = () => {
    navigate("/second");
  };

  const handleFilterChange = (filters) => {
    const filtered = carData.filter((car) => {
      const price = parseInt(car.price.replace(/[^0-9]/g, ""));
      const { make, fuelType, priceRange, condition } = filters;

      return (
        (!make || car.name.toLowerCase().includes(make.toLowerCase())) &&
        (!fuelType || car.fuelType === fuelType) &&
        (!condition || car.condition === condition) &&
        (!priceRange ||
          (priceRange === "<25000" && price < 25000) ||
          (priceRange === "25000-50000" && price >= 25000 && price <= 50000) ||
          (priceRange === "50000-100000" && price > 50000 && price <= 100000) ||
          (priceRange === ">100000" && price > 100000))
      );
    });

    setFilteredCars(filtered);
  };

  return (
    <div>
      {!standalone && <Navbar />}
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

      {!standalone && <FilterSearch onFilterChange={handleFilterChange} />}

      <div className="car-section">
        <h2>Available Cars</h2>
        <div className="car-grid">
          {filteredCars.length === 0 ? (
            <p>No cars match your filters.</p>
          ) : (
            filteredCars.map((car) => (
              <div key={car.id} className="car-card">
                <img src={car.image} alt={car.name} />
                <h3>{car.name}</h3>
                <p>{car.description}</p>
                <p><strong>{car.price}</strong></p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
