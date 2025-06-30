import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value); // send the search text to the parent
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <p className="brand-name">GearWise</p>
      </div>
      <div className="navbar-right">
        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#">Compare</a>
          <a href="#">Saved Cars</a>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search cars..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <span className="search-icon">🔍</span>
        </div>
        <div className="navbar-signin">
          <button className="signin-btn">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
