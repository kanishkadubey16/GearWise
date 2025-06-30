import React from "react";
import { useNavigate } from "react-router-dom";
import "./SecondPage.css";
import carData from "../data/carData";

const fallbackImage = "https://via.placeholder.com/300x200?text=No+Image";

const SecondPage = () => {
  const navigate = useNavigate();

  return (
    <div className="second-page">
      <div className="header">
        <h2>Available Cars ({carData.length})</h2>
        <div className="sort">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort">
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>
      </div>

      <div className="car-grid">
        {carData.map((car) => (
          <div className="car-card" key={car.id}>
            <img
              src={car.image}
              alt={car.name}
              onError={(e) => (e.target.src = fallbackImage)}
            />
            <div className="car-info">
              <h3>{car.name}</h3>
              <p className="price">{car.price}</p>
              <div className="tags">
                <span>{car.transmission}</span>
                <span>{car.fuelType}</span>
                <span>{car.mileage}</span>
              </div>
              <div className="details">
                <span>{car.year}</span>
                <span>{car.condition}</span>
              </div>
              <div className="buttons">
                <button
                  className="view-btn"
                  onClick={() => navigate(`/car/${car.id}`)}
                >
                  View Details
                </button>
                <button className="compare-btn">Compare</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondPage;
