import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>
          About <span className="highlight">GearWise</span>
        </h1>
        <p>
          Your trusted automotive comparison platform, powered by expert insights and
          cutting-edge technology.
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
          Founded in 2020, GearWise emerged from a simple vision: to revolutionize how people make automotive decisions.
          Our founders, frustrated by the lack of reliable, comprehensive car comparison tools, set out to create a
          platform that combines expert automotive knowledge with cutting-edge technology.
        </p>
        <p>
          Today, we're proud to be the go-to destination for millions of car buyers, offering unbiased reviews, detailed
          comparisons, and expert insights that help you make the right choice for your needs and budget.
        </p>
        <div className="badges">
          <span>✔ Unbiased Reviews</span>
          <span>✔ Expert Analysis</span>
          <span>✔ Real-time Data</span>
        </div>
        <img
          className="story-image"
          src="https://images.unsplash.com/photo-1602407294553-6c647ae3b3b9"
          alt="Team discussing"
        />
      </section>

      {/* Mission and Values */}
      <section className="mission">
        <h2>Our Mission & Values</h2>
        <p>
          We're committed to empowering every car buyer with the knowledge and tools they need to make confident
          decisions.
        </p>
        <div className="values">
          <div className="value-box">
            <h3>🔍 Transparency</h3>
            <p>
              We believe in complete transparency in our reviews, pricing, and methodology. No hidden agendas, just
              honest insights.
            </p>
          </div>
          <div className="value-box">
            <h3>🚀 Innovation</h3>
            <p>
              We constantly evolve our platform with the latest technology to provide the most accurate and up-to-date
              information.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Developer */}
      <section className="developer">
        <h2>Meet the Developer</h2>
        <p>
          Hello! I'm <strong>Kanishka Dubey</strong>, a passionate front-end developer who built GearWise from scratch.
          My goal was to build a reliable, fast, and user-friendly platform that helps people compare and find the best
          cars easily.
        </p>
        <img
          className="dev-image"
          src="https://images.unsplash.com/photo-1610135970626-9941cf492bbf"
          alt="Developer"
        />
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
    </div>
  );
};

export default About;
