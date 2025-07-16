import React from 'react';
import { useLocation } from 'react-router-dom';
import './SecondPage.css'; 

const ComparePage = () => {
  const location = useLocation();
  const { selectedCars } = location.state || {};

  if (!selectedCars || selectedCars.length < 2) {
    return <div>No cars selected for comparison.</div>;
  }

  return (
    <div className="compare-page">
      <h2>Compare Cars</h2>
      <div className="comparison-grid">
        {selectedCars.map((car) => (
          <div className="car-card" key={car.id}>
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>Price: {car.price}</p>
            <p>Year: {car.year}</p>
            <p>Fuel Type: {car.fuelType}</p>
            <p>Transmission: {car.transmission}</p>
            <p>Mileage: {car.mileage}</p>
            <p>Condition: {car.condition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparePage;