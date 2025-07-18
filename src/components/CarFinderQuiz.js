import React, { useState } from "react";
import carData from "../data/carData";
import "./CarFinderQuiz.css";

const CarFinderQuiz = () => {
  const [answers, setAnswers] = useState({
    budget: "",
    fuel: "",
    transmission: "",
    condition: "",
    brand: "",
  });

  const [results, setResults] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  // Extract unique brands dynamically
  const uniqueBrands = Array.from(
    new Set(carData.map((car) => car.name.split(" ")[0]))
  ).sort();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const getBudgetRange = (rangeLabel) => {
    switch (rangeLabel) {
      case "<5L":
        return [0, 500000];
      case "5-10L":
        return [500000, 1000000];
      case "10-20L":
        return [1000000, 2000000];
      case "20-50L":
        return [2000000, 5000000];
      case ">50L":
        return [5000000, Infinity];
      default:
        return [0, Infinity];
    }
  };

  const handleSubmit = () => {
    const { budget, fuel, transmission, condition, brand } = answers;
    if (!budget || !fuel || !transmission || !condition || !brand) {
      alert("❗ Please answer all the questions.");
      return;
    }

    const [minPrice, maxPrice] = getBudgetRange(budget);
    const filtered = carData.filter((car) => {
      return (
        car.price >= minPrice &&
        car.price <= maxPrice &&
        car.fuelType.toLowerCase() === fuel.toLowerCase() &&
        car.transmission.toLowerCase().includes(transmission.toLowerCase()) &&
        car.condition.toLowerCase() === condition.toLowerCase() &&
        car.name.toLowerCase().startsWith(brand.toLowerCase())
      );
    });

    setResults(filtered);
    setSubmitted(true);
  };

  const restartQuiz = () => {
    setAnswers({
      budget: "",
      fuel: "",
      transmission: "",
      condition: "",
      brand: "",
    });
    setResults([]);
    setSubmitted(false);
  };

  return (
    <div className="quiz-container">
      <h2>🧠 Car Finder Quiz</h2>

      {!submitted && (
        <>
          <div className="question">
            <p>1. What is your budget?</p>
            <select
              name="budget"
              value={answers.budget}
              onChange={handleChange}
            >
              <option value="">Select your budget</option>
              <option value="<5L">Less than 5 Lakhs</option>
              <option value="5-10L">5 to 10 Lakhs</option>
              <option value="10-20L">10 to 20 Lakhs</option>
              <option value="20-50L">20 to 50 Lakhs</option>
              <option value=">50L">More than 50 Lakhs</option>
            </select>
          </div>

          <div className="question">
            <p>2. Preferred fuel type?</p>
            <select name="fuel" value={answers.fuel} onChange={handleChange}>
              <option value="">Select fuel type</option>
              <option value="Gasoline">Gasoline</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Mild Hybrid">Mild Hybrid</option>
            </select>
          </div>

          <div className="question">
            <p>3. Transmission type?</p>
            <select
              name="transmission"
              value={answers.transmission}
              onChange={handleChange}
            >
              <option value="">Select transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="CVT">CVT</option>
            </select>
          </div>

          <div className="question">
            <p>4. Condition?</p>
            <select
              name="condition"
              value={answers.condition}
              onChange={handleChange}
            >
              <option value="">Select condition</option>
              <option value="New">New</option>
              <option value="Used">Used</option>
            </select>
          </div>

          <div className="question">
            <p>5. Brand?</p>
            <select
              name="brand"
              value={answers.brand}
              onChange={handleChange}
            >
              <option value="">Select brand</option>
              {uniqueBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          <button onClick={handleSubmit}>✅ Find My Car</button>
        </>
      )}

      {submitted && (
        <div className="results">
          <h3>📋 Recommended Cars:</h3>
          {results.length > 0 ? (
            <ul>
              {results.map((car) => (
                <li key={car.id}>
                  <strong>{car.name}</strong> – ₹
                  {(car.price / 100000).toFixed(2)} Lakhs
                  <br />
                  Fuel: {car.fuelType} | {car.transmission} | {car.condition}
                </li>
              ))}
            </ul>
          ) : (
            <p>❌ No matching cars found.</p>
          )}
          <button onClick={restartQuiz}>🔄 Retake Quiz</button>
        </div>
      )}
    </div>
  );
};

export default CarFinderQuiz;
