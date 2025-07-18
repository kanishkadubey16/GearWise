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
      <h2>🔍 Filter Your Car Search</h2>
      <div className="filter-options">

        {/* Make Filter */}
        <select name="make" onChange={handleChange} value={filters.make}>
          <option value="">All Makes</option>
          <option value="Toyota">Toyota</option>
          <option value="Honda">Honda</option>
          <option value="Ford">Ford</option>
          <option value="Tesla">Tesla</option>
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Kia">Kia</option>
          <option value="Mercedes-Benz">Mercedes-Benz</option>
          <option value="Lamborghini">Lamborghini</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="Mazda">Mazda</option>
          <option value="Subaru">Subaru</option>
          <option value="Nissan">Nissan</option>
          <option value="Volkswagen">Volkswagen</option>
          <option value="Range Rover">Range Rover</option>
          <option value="Mini">Mini</option>
          <option value="Lexus">Lexus</option>
        </select>

        {/* Fuel Type Filter */}
        <select name="fuelType" onChange={handleChange} value={filters.fuelType}>
          <option value="">All Fuel Types</option>
          <option value="Gasoline">Gasoline</option>
          <option value="Diesel">Diesel</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Mild Hybrid">Mild Hybrid</option>
          <option value="Electric">Electric</option>
        </select>

        {/* Price Range Filter */}
        <select name="priceRange" onChange={handleChange} value={filters.priceRange}>
          <option value="">All Prices</option>
          <option value="<2500000">Below ₹25L</option>
          <option value="2500000-5000000">₹25L - ₹50L</option>
          <option value="5000000-10000000">₹50L - ₹1 Cr</option>
          <option value=">10000000">Above ₹1 Cr</option>
        </select>

        {/* Condition Filter */}
        <select name="condition" onChange={handleChange} value={filters.condition}>
          <option value="">All Conditions</option>
          <option value="New">New</option>
          <option value="Used">Used</option>
        </select>

        {/* Apply Button */}
        <button className="apply-button" onClick={applyFilters}>
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSearch;
