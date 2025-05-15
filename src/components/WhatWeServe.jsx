import React from 'react';
import '../styles/WhatWeServe.css';

const WhatWeServe = ({ onClose }) => {
  return (
    <div className="what-we-serve-wrapper">
      <button className="close-button" onClick={onClose}>
        <span className="close-icon"></span>
      </button>
      
      <section className="serve-section">
        <div className="serve-wrapper">
          <h1 className="serve-title">What We Serve</h1>
          
          <div className="services-grid">
            <div className="service-item">
              <h2>Web Development</h2>
              <p>Custom websites and web applications built with cutting-edge technologies</p>
              <ul className="service-features">
                <li>Responsive Design</li>
                <li>Frontend Development</li>
                <li>Backend Integration</li>
                <li>Performance Optimization</li>
              </ul>
            </div>

            <div className="service-item">
              <h2>Mobile Solutions</h2>
              <p>Native and cross-platform mobile applications for iOS and Android</p>
              <ul className="service-features">
                <li>iOS Development</li>
                <li>Android Development</li>
                <li>Cross-platform Apps</li>
                <li>Mobile UI/UX</li>
              </ul>
            </div>

            <div className="service-item">
              <h2>Digital Design</h2>
              <p>Comprehensive design solutions for digital products and brands</p>
              <ul className="service-features">
                <li>UI/UX Design</li>
                <li>Brand Identity</li>
                <li>Motion Graphics</li>
                <li>Design Systems</li>
              </ul>
            </div>

            <div className="service-item">
              <h2>Digital Strategy</h2>
              <p>Strategic planning and consulting for digital transformation</p>
              <ul className="service-features">
                <li>Market Research</li>
                <li>Digital Transformation</li>
                <li>Technology Consulting</li>
                <li>Growth Strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeServe; 