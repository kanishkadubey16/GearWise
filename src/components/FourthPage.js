import React from 'react';
import './FourthPage.css'; 

const FourthPage = () => {
  return (
    <div className="fourth-page">

      <section className="cta-section">
        <h2>Ready to Find Your Perfect Car?</h2>
        <p>Start comparing vehicles today and discover which car is the right match for your lifestyle and budget.</p>
        <div className="cta-buttons">
          <button className="btn-primary">Start Car Search</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>GearWise</h3>
            <p>Helping you find the perfect car. </p>
            <div className="social-icons">
              <span>🌐</span>
              <span>🐦</span>
              <span>📸</span>
              <span>▶️</span>
            </div>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Compare Cars</li>
              <li>Saved Cars</li>
              <li>Sign In</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Car Categories</h4>
            <ul>
              <li>Sedans</li>
              <li>SUVs</li>
              <li>Electric Vehicles</li>
              <li>Luxury Cars</li>
              <li>Sports Cars</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>📞 +91 - 9425971086</p>
            <p>✉️ kanishka.dubey2024@nst.rishihood.edu.in</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 GearWise. All rights reserved.</p>
          <div className="footer-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FourthPage;
