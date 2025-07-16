import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <p className="brand-name">GearWise</p>
      </div>
      <div className="navbar-right">
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/second">Compare</Link>
          <Link to="/about">About</Link> 
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
