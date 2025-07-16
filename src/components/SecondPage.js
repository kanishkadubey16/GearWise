import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SecondPage.css";
import carData from "../data/carData";

const fallbackImage = "https://via.placeholder.com/300x200?text=No+Image";

const SecondPage = () => {
  const [selectedCars, setSelectedCars] = useState([]);
  const navigate = useNavigate();

  const handleSelectCar = (car) => {
    if (selectedCars.some(selectedCar => selectedCar.id === car.id)) {
      setSelectedCars(selectedCars.filter(selectedCar => selectedCar.id !== car.id));
    } else {
      setSelectedCars([...selectedCars, car]);
    }
  };

  const handleCompare = () => {
    if (selectedCars.length >= 2) {
      navigate('/compare', { state: { selectedCars } });
    } else {
      alert('Please select at least two cars to compare.');
    }
  };

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
                <button
                  className="compare-btn"
                  onClick={() => handleSelectCar(car)}
                >
                  {selectedCars.some(selectedCar => selectedCar.id === car.id) ? 'Selected' : 'Compare'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="compare-selected"
        onClick={handleCompare}
        disabled={selectedCars.length < 2}
      >
        Compare Selected
      </button>
    </div>
  );
};

export default SecondPage;