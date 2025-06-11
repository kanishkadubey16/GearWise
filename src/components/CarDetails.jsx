import React from "react";
import { useParams } from "react-router-dom";
import carData from "../data/carData";
import "./CarDetails.css";

const CarDetails = () => {
  const { id } = useParams();
  const car = carData.find((c) => c.id === parseInt(id));

  if (!car) return <div>Car not found</div>;

  return (
    <div className="car-details-page">
      <h1>{car.name}</h1>
      <p className="subtitle">{car.description}</p>

      <div className="car-detail-container">
        <div className="car-image-box">
          <img src={car.image} alt={car.name} className="car-detail-image" />
        </div>

        <div className="car-info-box">
          <p><strong>Fuel Type:</strong> {car.fuelType}</p>
          <p><strong>Transmission:</strong> {car.transmission}</p>
          <p><strong>Top Speed:</strong> {car.topSpeed || "N/A"}</p>
          <p><strong>Mileage:</strong> {car.mileage}</p>
          <p><strong>On-Road Price:</strong> {car.price}</p>
          <p><strong>Year:</strong> {car.year}</p>
          <p><strong>Condition:</strong> {car.condition}</p>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
