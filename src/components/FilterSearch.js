/// components/FilterSearch.js
import React, { useState } from "react";
import "./FilterSearch.css";

const FilterSearch = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    make: "",
    fuelType: "",
    priceRange: "",
    condition: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <div className="filter-section">
      <h2>Filter Your Search</h2>
      <div className="filter-options">
        <select name="make" onChange={handleChange}>
          <option value="">Make</option>
          <option value="Honda">Honda</option>
          <option value="Ford">Ford</option>
          <option value="Tesla">Tesla</option>
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
          <option value="Lamborghini">Lamborghini</option>
        </select>

        <select name="fuelType" onChange={handleChange}>
          <option value="">Fuel Type</option>
          <option value="Gasoline">Gasoline</option>
          <option value="Diesel">Diesel</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Electric">Electric</option>
        </select>

        <select name="priceRange" onChange={handleChange}>
          <option value="">Price Range</option>
          <option value="<2500000">Below ₹25,00,000</option>
          <option value="2500000-5000000">₹25,00,000 - ₹50,00,000</option>
          <option value="5000000-10000000">₹50,00,000 - ₹1 Cr</option>
          <option value=">10000000">Above ₹1 Cr</option>
        </select>

        <select name="condition" onChange={handleChange}>
          <option value="">Condition</option>
          <option value="New">New</option>
          <option value="Used">Used</option>
        </select>

        <button className="apply-button" onClick={applyFilters}>
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSearch;
