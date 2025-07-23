import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FourthPage.css";
import LoginSignup from "../LoginSighup/LoginSignup"; // ✅ Adjust this path if needed

const FourthPage = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false); // ✅ State for modal

  const handleStartSearch = () => {
    navigate("/second");
  };

  const openLoginPopup = (e) => {
    e.preventDefault(); // stop <a href> from navigating away
    setShowLoginModal(true); // open modal
  };

  return (
    <div className="fourth-page">
      <section className="cta-section">
        <h2>Ready to Find Your Perfect Car?</h2>
        <p>
          Start comparing vehicles today and discover which car is the right match for your lifestyle and budget.
        </p>
        <div className="cta-buttons">
          <button className="btn-primary" onClick={handleStartSearch}>
            Start Car Search
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>GearWise</h3>
            <p>Helping you find the perfect car.</p>
            <div className="social-icons">
              <a href="#" aria-label="Website">🌐</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="YouTube">▶️</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/second">Compare Cars</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/signin" onClick={openLoginPopup}>Sign In</a></li>
              {/* 👆 fixed: now triggers modal popup */}
            </ul>
          </div>

          <div className="footer-column contact-details">
            <h4>Contact Us</h4>
            <p>📞 +91 - 9425971086</p>
            <p>
              ✉️ <a className="footer-email" href="mailto:kanishka.dubey2024@nst.rishihood.edu.in">
                kanishka.dubey2024@nst.rishihood.edu.in
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 GearWise. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>

      {/* ✅ Render modal when user clicks Sign In */}
      {showLoginModal && (
        <LoginSignup onClose={() => setShowLoginModal(false)} />
      )}
    </div>
  );
};

export default FourthPage;
