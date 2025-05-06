import React from "react";
import "./FilterSearch.css";

const FilterSearch = () => {
  return (
    <div className="filter-section">
      <h2>Filter Your Search</h2>
      <div className="filter-options">
        <select>
          <option>Make</option>
          <option>Honda</option>
          <option>Ford</option>
          <option>Tesla</option>
        </select>
        <select>
          <option>Type</option>
          <option>Sedan</option>
          <option>SUV</option>
          <option>Truck</option>
        </select>
        <select>
          <option>Fuel Type</option>
          <option>Petrol</option>
          <option>Diesel</option>
          <option>Electric</option>
        </select>
        <select>
          <option>Price Range</option>
          <option>$10k - $20k</option>
          <option>$20k - $30k</option>
          <option>$30k+</option>
        </select>
        <select>
          <option>Features</option>
          <option>Sunroof</option>
          <option>Navigation</option>
          <option>Bluetooth</option>
        </select>
        <button className="apply-button">Apply Filters</button>
      </div>
    </div>
  );
};

export default FilterSearch;
