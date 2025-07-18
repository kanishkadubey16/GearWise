import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FirstPage.css";
import carImage from "../assets/car.jpg";
import carData from "../data/carData";
import Navbar from "./Navbar";
import FilterSearch from "./FilterSearch";

const FirstPage = () => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    make: "",
    fuelType: "",
    priceRange: "",
    condition: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleStartComparing = () => {
    navigate("/second");
  };

  const handleQuizNavigate = () => {
    navigate("/car-finder-quiz");
  };

  const filteredCars = carData
    .filter((car) => {
      const matchesMake = !filters.make || car.name.toLowerCase().includes(filters.make.toLowerCase());
      const matchesFuel = !filters.fuelType || car.fuelType === filters.fuelType;
      const matchesCondition = !filters.condition || car.condition === filters.condition;

      const price = car.price;
      const matchesPriceRange = (() => {
        if (!filters.priceRange) return true;
        if (filters.priceRange.startsWith("<")) return price < Number(filters.priceRange.slice(1));
        if (filters.priceRange.startsWith(">")) return price > Number(filters.priceRange.slice(1));
        const [min, max] = filters.priceRange.split("-").map(Number);
        return price >= min && price <= max;
      })();

      return matchesMake && matchesFuel && matchesCondition && matchesPriceRange;
    })
    .filter((car) => {
      if (!searchTerm) return true;
      const lowerSearch = searchTerm.toLowerCase();
      return (
        car.name.toLowerCase().includes(lowerSearch) ||
        car.description.toLowerCase().includes(lowerSearch)
      );
    });

  return (
    <div>
      {/* Navbar with search support */}
      <Navbar onSearch={handleSearch} />

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Find your Perfect Car Match</h1>
            <p>
              Compare models, features, and prices to make an informed decision on your next car purchase.
            </p>

            <div className="hero-buttons">
              <button className="FirstButton" onClick={handleStartComparing}>
                Start Comparing
              </button>
              <button className="FirstButton" onClick={handleQuizNavigate}>
                Car Finder Quiz
              </button>
            </div>
          </div>

          <div className="hero-image">
            <img src={carImage} alt="Car" />
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <FilterSearch onFilterChange={handleFilterChange} />

      {/* Car List Section */}
      <div className="car-section">
        <h2>Available Cars</h2>
        <div className="car-grid">
          {filteredCars.length === 0 ? (
            <p>No cars match your search or filters.</p>
          ) : (
            filteredCars.map((car) => (
              <div key={car.id} className="car-card">
                <img src={car.image} alt={car.name} />
                <h3>{car.name}</h3>
                <p>{car.description}</p>
                <p><strong>₹{parseInt(car.price).toLocaleString()}</strong></p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
