import React from "react";
import "./CarDetails.css";
import carData from "../data/carData";
import { useParams } from "react-router-dom";

// 📊 Estimate monthly payment
const calculateMonthlyPayment = (price) => {
  const downPayment = 10000;
  const loanTerm = 48; // months
  const interestRate = 0.05; // 5%
  const principal = price - downPayment;
  const monthlyInterestRate = interestRate / 12;
  const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
  return monthlyPayment.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const CarDetails = () => {
  const { id } = useParams();
  const car = carData.find((car) => car.id === parseInt(id));

  if (!car) {
    return <div className="car-not-found">Car not found</div>;
  }

  return (
    <div className="car-details-container">
      {/* Car Title & Price */}
      <div className="car-header">
        <h2>
          {car.year} {car.name}
        </h2>
        <p className="location">📍 Los Angeles, CA • 👁️ 1,247 views</p>
        <h3 className="price">
          ₹{parseFloat(car.price).toLocaleString()}{" "}
          <span className="on-road">On-Road Price</span>
        </h3>
      </div>

      {/* Main Car Image */}
      <div className="car-image-section">
        <img src={car.image} alt={car.name} className="main-image" />
        <div className="tag">
          {car.condition === "New" ? "Excellent Condition" : car.condition}
        </div>
        <div className="icons">
          <button>❤️</button>
          <button>🔁</button>
        </div>
      </div>

      {/* ❌ Removed Gallery Section */}
      {/* ❌ Removed: <div className="gallery-section">...</div> */}

      {/* Key Features */}
      <div className="key-features">
        <h4>Key Features</h4>
        <div className="features-list">
          <div className="feature-box">
            🛡️ Safety<br /><span>5-Star Rating</span>
          </div>
          <div className="feature-box">
            ⚙️ AWD<br /><span>All-Wheel Drive</span>
          </div>
          <div className="feature-box">
            🌱 Eco Mode<br /><span>Fuel Efficient</span>
          </div>
          <div className="feature-box">
            📱 Connected<br /><span>Smart Features</span>
          </div>
        </div>
      </div>

      {/* ❌ Removed Action Buttons Section */}
      {/* ❌ Removed: <div className="actions">...</div> */}

      {/* Specs */}
      <div className="specs">
        <h4>Vehicle Specifications</h4>
        <ul>
          <li><strong>Year:</strong> {car.year}</li>
          <li><strong>Fuel Type:</strong> {car.fuelType}</li>
          <li><strong>Transmission:</strong> {car.transmission}</li>
          <li><strong>Mileage:</strong> {car.mileage}</li>
          <li><strong>Condition:</strong> {car.condition}</li>
          <li><strong>Price:</strong> ₹{parseFloat(car.price).toLocaleString()}</li>
        </ul>
      </div>

      {/* Monthly Payment Estimate */}
      <div className="finance-section">
        <h4>Monthly Payment Estimate</h4>
        <p><strong>Down Payment:</strong> 10,000</p>
        <p><strong>Loan Term:</strong> 48 months</p>
        <p className="monthly-payment">
          <strong>Estimated Monthly Payment:</strong>{" "}
          {calculateMonthlyPayment(car.price)}
        </p>
      </div>

      {/* Car Description */}
      <div className="description-section">
        <h4>Vehicle Description</h4>
        <p>{car.descriptionDetails}</p>
      </div>
    </div>
  );
};

export default CarDetails;
