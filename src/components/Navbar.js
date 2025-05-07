import React from "react";
import "./Navbar.css";

const Navbar = () => {
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
      <input type="text" placeholder="Search cars..." />
      <span className="search-icon">🔍</span>
    </div>
    <div className="navbar-signin">
      <button className="signin-btn">Sign In</button>
    </div>
  </div>
</nav>
  )}
export default Navbar;