import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SecondPage.css';
import carData from '../data/carData';

const fallbackImage = 'https://via.placeholder.com/300x200?text=No+Image';

const SecondPage = () => {
  const [selectedCars, setSelectedCars] = useState([]);
  const [sortOption, setSortOption] = useState('Recommended');
  const navigate = useNavigate();

  // 🔧 Safe price parser: handles string or number
  const parsePrice = (price) => {
    if (typeof price === 'string') {
      return parseFloat(price.replace(/[₹,]/g, ''));
    } else if (typeof price === 'number') {
      return price;
    } else {
      return 0;
    }
  };

  // ✅ Handle compare button
  const handleCompare = () => {
    if (selectedCars.length >= 2) {
      navigate('/compare', { state: { selectedCars } });
    } else {
      alert('Please select at least two cars to compare.');
    }
  };

  // ✅ Car select/deselect logic
  const handleSelectCar = (car) => {
    if (selectedCars.some((selectedCar) => selectedCar.id === car.id)) {
      setSelectedCars(selectedCars.filter((selectedCar) => selectedCar.id !== car.id));
    } else {
      setSelectedCars([...selectedCars, car]);
    }
  };

  // ✅ Return sorted cars based on selected sort option
  const getSortedCars = () => {
    const cars = [...carData]; // don't mutate original

    if (sortOption === 'Price: Low to High') {
      return cars.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    }

    if (sortOption === 'Price: High to Low') {
      return cars.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }

    if (sortOption === 'Newest First') {
      return cars.sort((a, b) => b.year - a.year);
    }

    return cars; // Recommended (default order)
  };

  return (
    <div className="second-page">
      {/* --- Header Section --- */}
      <div className="header">
        <h2>Available Cars ({carData.length})</h2>

        <div className="sort">
          <label htmlFor="sort">Sort by:</label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>
      </div>

      {/* --- Car Cards --- */}
      <div className="car-grid">
        {getSortedCars().map((car) => (
          <div key={car.id} className="car-card">
            <img
              src={car.image}
              alt={car.name}
              onError={(e) => (e.target.src = fallbackImage)}
            />
            <div className="car-info">
              <h3>{car.name}</h3>
              <p className="price">₹{parsePrice(car.price).toLocaleString('en-IN')}</p>

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
                  className={`compare-btn ${
                    selectedCars.some((c) => c.id === car.id) ? 'selected' : ''
                  }`}
                  onClick={() => handleSelectCar(car)}
                >
                  {selectedCars.some((c) => c.id === car.id) ? 'Selected' : 'Compare'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Compare Selected Button --- */}
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
