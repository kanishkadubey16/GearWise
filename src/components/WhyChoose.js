import React from 'react';
import './WhyChoose.css';

const features = [
    {
      title: 'Side-by-Side Comparison',
      description: 'Compare up to 3 vehicles side by side on specs, features, and pricing.',
      icon: '📊',
    },
    {
      title: 'Expert Reviews',
      description: 'Get access to professional reviews and ratings to guide your decision.',
      icon: '🏅',
    },
    {
      title: 'Expert Support',
      description: 'Connect with our car experts via live chat for personalized advice.',
      icon: '💬',
    },
    {
      title: 'Mobile Friendly',
      description: 'Access our tools anywhere, on any device, making car shopping convenient.',
      icon: '📱',
    },
    {
      title: 'Secure Platform',
      description: 'Your data and comparisons are protected with industry-standard security.',
      icon: '🔒',
    },
    {
      title: 'Real-Time Updates',
      description: 'Get the latest updates on car prices, reviews, and features instantly.',
      icon: '⏱️',
    },
  ];
  

function WhyChoose() {
  return (
    <section className="why-choose">
      <h2>Why Choose GearWise</h2>
      <p className="subheading">
        We help you make the best car buying decision with our comprehensive tools and expert advice.
      </p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-box" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;
