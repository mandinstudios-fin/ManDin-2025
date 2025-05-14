import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import WhatWeDo from './components/WhatWeDo';
import './styles/HomePage.css';

const WhatWeServeSection = () => {
  return (
    <div className="what-we-serve-section">
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
    </div>
  );
};

const HomePage = () => {
  const [isWhatWeDoVisible, setIsWhatWeDoVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.what-we-serve-section');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight * 0.75;
      
      if (isVisible) {
        section.classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMeetUsClick = () => {
    setIsWhatWeDoVisible(true);
  };

  const handleClose = () => {
    setIsWhatWeDoVisible(false);
  };

  return (
    <div className="relative w-full overflow-visible bg-transparent">
      {/* Background Video with Overlay */}
      <div className="video-container">
        <div className="video-overlay"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-background"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="hero-content">
        <div className="text-center w-full max-w-[1300px] mx-auto px-4">
          <div className="hero-title-container">
            <h1 className="hero-title title-unfold">Where expertise meets artistry</h1>
            <h2 className="hero-title title-unfold2">You're witnessing brilliance unfold</h2>
          </div>
        </div>
      </div>

      {/* Meet Us Button */}
      {/* <button className="button-container" onClick={handleMeetUsClick}>
        <h1 className="button-text">Meet Us</h1>
      </button> */}

      {/* What We Do Section */}
      <WhatWeDo isVisible={isWhatWeDoVisible} onClose={handleClose} />

      {/* What We Serve Section */}
      <WhatWeServeSection />
    </div>
  );
};

export default HomePage;
