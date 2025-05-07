import React from "react";
import "./SecondPage.css";

import corollaImage from '../assets/corolla.jpg';
import civicImage from '../assets/civic.jpg';
import teslaImage from '../assets/TeslaModelS.jpg';
import porscheImage from '../assets/PorscheTaycan.jpg';
import bmwImage from '../assets/BMWi8.jpg';
import audiImage from '../assets/AudiRS7.jpg';
import mercedesImage from '../assets/Mercedes-BenzEQS.jpg';
import lamborghiniImage from '../assets/LamborghiniHuracan.jpg';
import lucidImage from '../assets/LucidAir.jpg';
import rangeRoverImage from '../assets/RangeRoverSport.jpg';

const carData = [
  {
    name: "Corolla",
    price: "$23,500",
    image: corollaImage,
    year: 2023,
    fuel: "Gasoline",
    type: "Sedan",
    transmission: "CVT",
    mpg: "35 MPG",
    status: "New"
  },
  {
    name: "Civic",
    price: "$24,650",
    image: civicImage,
    year: 2023,
    fuel: "Gasoline",
    type: "Sedan",
    transmission: "CVT",
    mpg: "36 MPG",
    status: "New"
  },
  {
    name: "Tesla Model S",
    price: "$89,990",
    image: teslaImage,
    year: 2024,
    fuel: "Electric",
    type: "Sedan",
    transmission: "Automatic",
    mpg: "396 mi range",
    status: "New"
  },
  {
    name: "Porsche Taycan",
    price: "$92,500",
    image: porscheImage,
    year: 2023,
    fuel: "Electric",
    type: "Luxury",
    transmission: "2-Speed Automatic",
    mpg: "246 mi range",
    status: "New"
  },
  {
    name: "BMW i8",
    price: "$147,500",
    image: bmwImage,
    year: 2020,
    fuel: "Hybrid",
    type: "Sports",
    transmission: "Automatic",
    mpg: "69 MPGe",
    status: "Used"
  },
  {
    name: "Audi RS7",
    price: "$123,000",
    image: audiImage,
    year: 2024,
    fuel: "Gasoline",
    type: "Luxury",
    transmission: "Automatic",
    mpg: "22 MPG",
    status: "New"
  },
  {
    name: "Mercedes-Benz EQS",
    price: "$104,400",
    image: mercedesImage,
    year: 2024,
    fuel: "Electric",
    type: "Luxury",
    transmission: "Automatic",
    mpg: "350 mi range",
    status: "New"
  },
  {
    name: "Lamborghini Huracán",
    price: "$261,274",
    image: lamborghiniImage,
    year: 2023,
    fuel: "Gasoline",
    type: "Supercar",
    transmission: "7-Speed Dual-Clutch",
    mpg: "15 MPG",
    status: "New"
  },
  {
    name: "Lucid Air",
    price: "$87,400",
    image: lucidImage,
    year: 2024,
    fuel: "Electric",
    type: "Luxury",
    transmission: "Automatic",
    mpg: "410 mi range",
    status: "New"
  },
  {
    name: "Range Rover Sport",
    price: "$83,000",
    image: rangeRoverImage,
    year: 2024,
    fuel: "Mild Hybrid",
    type: "SUV",
    transmission: "Automatic",
    mpg: "23 MPG",
    status: "New"
  }
];

const fallbackImage = "https://via.placeholder.com/300x200?text=No+Image";

const SecondPage = () => {
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
        {carData.map((car, index) => (
          <div className="car-card" key={index}>
            <img
              src={car.image}
              alt={car.name}
              onError={(e) => (e.target.src = fallbackImage)}
            />
            <div className="car-info">
              <h3>{car.name}</h3>
              <p className="price">{car.price}</p>
              <div className="tags">
                <span>{car.type}</span>
                <span>{car.transmission}</span>
                <span>{car.mpg}</span>
              </div>
              <div className="details">
                <span>{car.year}</span>
                <span>{car.fuel}</span>
                <span>{car.status}</span>
              </div>
              <div className="buttons">
                <button className="view-btn">View Details</button>
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
