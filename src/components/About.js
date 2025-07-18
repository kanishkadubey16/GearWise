import React from "react";
import "./About.css";
import group_photo from "../assets/group_photo.jpg";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>
          About <span className="highlight">GearWise</span>
        </h1>
        <p>
          Your trusted automotive comparison platform, powered by expert insights and cutting-edge technology.
        </p>
        <div className="stats">
          <div>
            <h2>50K+</h2>
            <p>Cars Analyzed</p>
          </div>
          <div>
            <h2>10K+</h2>
            <p>Expert Reviews</p>
          </div>
          <div>
            <h2>100K+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="story">
        <h2>Our Story</h2>
        <p>
          GearWise was built with one goal: to make finding and comparing cars effortless, transparent, and enjoyable for everyone.
        </p>
        <p>Our platform empowers you to:</p>
        <ul>
          <li>
            Instantly <strong>search for cars</strong> by make, model, fuel type, price range, and more using powerful filters.
          </li>
          <li>
            <strong>Compare multiple vehicles side-by-side</strong>—see features, specs, and prices in a single glance, so you never miss a detail.
          </li>
          <li>
            Explore <strong>expert reviews and trusted ratings</strong> to gain real-world insights into every model.
          </li>
          <li>
            Enjoy a fast, modern, and user-friendly experience designed for both new and seasoned car buyers.
          </li>
        </ul>
        <p>
          GearWise isn’t just a comparison site—it’s your smart companion for making informed automotive decisions, every step of the way.
        </p>
        <div className="badges">
          <span>✔ Unbiased Reviews</span>
          <span>✔ Expert Analysis</span>
          <span>✔ Real-time Data</span>
        </div>
        <img
          className="team-photo"
          src={group_photo}
          alt="GearWise Team"
        />
      </section>

      {/* Mission and Values */}
      <section className="mission">
        <h2>Our Mission & Values</h2>
        <p>
          We're committed to empowering every car buyer with the knowledge and tools they need to make confident decisions.
        </p>
        <div className="values">
          <div className="value-box">
            <h3>🔍 Transparency</h3>
            <p>
              We believe in complete transparency in our reviews, pricing, and methodology. No hidden agendas, just honest insights.
            </p>
          </div>
          <div className="value-box">
            <h3>🚀 Innovation</h3>
            <p>
              We constantly evolve our platform with the latest technology to provide the most accurate and up-to-date information.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Developer */}
      <section className="developer">
        <h2>Meet the Developer</h2>
        <p>
          Hello! I'm <strong>Kanishka Dubey</strong>, a passionate front-end developer who built GearWise from scratch.
          My goal was to build a reliable, fast, and user-friendly platform that helps people compare and find the best cars easily.
        </p>
        <a
          href="https://github.com/kanishkadubey16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="dev-image"
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt="GitHub developer"
          />
        </a>
      </section>

      {/* Expert Reviews */}
      <section className="experts">
        <h2>Expert Reviews</h2>
        <p>
          Our world-class team of automotive experts brings decades of combined experience in engineering, journalism,
          and industry analysis.
        </p>
        <div className="expert-cards">
          <div className="expert-card">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Expert 1"
            />
            <h4>David Carter</h4>
            <p>Automobile Journalist, 15+ yrs experience</p>
          </div>
          <div className="expert-card">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Expert 2"
            />
            <h4>Emily Chen</h4>
            <p>Test Driver & Reviewer</p>
          </div>
          <div className="expert-card">
            <img
              src="https://randomuser.me/api/portraits/men/56.jpg"
              alt="Expert 3"
            />
            <h4>Raj Malhotra</h4>
            <p>EV Specialist & Auto Engineer</p>
          </div>
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
              <li><a href="/signin">Sign In</a></li>
            </ul>
          </div>
          <div className="footer-column contact-details">
            <h4>Contact Us</h4>
            <p>📞 +91 - 9425971086</p>
            <p>
              ✉️{" "}
              <a
                className="footer-email"
                href="mailto:kanishka.dubey2024@nst.rishihood.edu.in"
              >
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
    </div>
  );
};

export default About;
