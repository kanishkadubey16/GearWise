import React from "react";
import "./CarDetails.css";
import carData from "../data/carData"; // adjust path as needed
import { useParams } from "react-router-dom";
import Corolla_side from "../assets/Corolla_side.jpg";
import Corolla_interior from "../assets/Corolla_interior.jpg";
import Corolla_front from "../assets/ Corrola_front.jpg";

const CarDetails = () => {
  const { id } = useParams();
  const car = carData.find((car) => car.id === parseInt(id));

  if (!car) {
    return <div className="car-not-found">Car not found</div>;
  }

  return (
    <div className="car-details-container">
      <div className="car-header">
        <h2>{car.year} {car.name}</h2>
        <p className="location">📍 Los Angeles, CA • 👁️ 1,247 views</p>
        <h3 className="price">{car.price} <span className="on-road">On-Road Price</span></h3>
      </div>

      <div className="car-image-section">
        <img src={car.image} alt={car.name} className="main-image" />
        <div className="tag">{car.condition === "New" ? "Excellent Condition" : car.condition}</div>
        <div className="icons">
          <button>❤️</button>
          <button>🔁</button>
        </div>
      </div>

      {/* 🔹 Gallery Section */}
      <div className="gallery-section">
  <h4>Car Gallery</h4>
  <div className="gallery-images">
    <a href={Corolla_front} target="_blank" rel="noopener noreferrer">
      <img src={Corolla_front} alt="Front View" />
    </a>
    <a href={Corolla_side} target="_blank" rel="noopener noreferrer">
      <img src={Corolla_side} alt="Side View" />
    </a>
    <a href={Corolla_interior} target="_blank" rel="noopener noreferrer">
      <img src={Corolla_interior} alt="Interior View" />
    </a>
  </div>
</div>



      {/* 🔹 Key Features */}
      <div className="key-features">
        <h4>Key Features</h4>
        <div className="features-list">
          <div className="feature-box">🛡️ Safety<br /><span>5-Star Rating</span></div>
          <div className="feature-box">⚙️ AWD<br /><span>All-Wheel Drive</span></div>
          <div className="feature-box">🌱 Eco Mode<br /><span>Fuel Efficient</span></div>
          <div className="feature-box">📱 Connected<br /><span>Smart Features</span></div>
        </div>
      </div>

      {/* 🔹 Actions */}
      <div className="actions">
        <button className="test-drive">📅 Schedule Test Drive</button>
        <button className="financing">🧾 Get Financing</button>
        <button className="contact">📞 Contact Dealer</button>
      </div>

      {/* 🔹 Specifications */}
      <div className="specs">
        <h4>Vehicle Specifications</h4>
        <ul>
          <li><strong>Year:</strong> {car.year}</li>
          <li><strong>Fuel Type:</strong> {car.fuelType}</li>
          <li><strong>Transmission:</strong> {car.transmission}</li>
          <li><strong>Mileage:</strong> {car.mileage}</li>
          <li><strong>On-Road Price:</strong> {car.price}</li>
          <li><strong>Condition:</strong> {car.condition}</li>
        </ul>
      </div>

      {/* 🔹 Financing Estimate */}
      <div className="finance-section">
        <h4>Monthly Payment Estimate</h4>
        <p><strong>Down Payment:</strong> $10,000</p>
        <p><strong>Loan Term:</strong> 48 months</p>
        <p className="monthly-payment"><strong>Estimated Monthly Payment:</strong> $1,247</p>
      </div>

      <div className="description-section">
  <h4>Vehicle Description</h4>
  <p>{car.descriptionDetails}</p>
</div>

    </div>  
  );
};

export default CarDetails;
