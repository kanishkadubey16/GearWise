import React from "react";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1 className="brand-name">GearWise</h1>
      </div>
      <div className="navbar-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#compare">Compare</a></li>
          <li><a href="#saved">Saved Cars</a></li>
          <li><a href="#search">Search Cars</a></li>
        </ul>
      </div>
      <div className="navbar-signin">
        <button className="signin-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
