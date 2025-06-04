import React, { useRef, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import './styles/HomePage.css';
import WhatWeDo from './components/WhatWeDo';
import WhoWeServe from './components/whoweserve';

const HomePage = () => {
  const sectionsRef = useRef([]);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  useEffect(() => {
    setLoaded(true);
    if (typeof window === 'undefined' || typeof window.IntersectionObserver === 'undefined') {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className={`relative w-full overflow-visible bg-transparent ${loaded ? 'loaded' : ''}`}>
      {/* Contact Slide */}
      <div className={`contact-slide ${isContactOpen ? 'open' : ''}`}>
        <button className="close-contact" onClick={toggleContact}>×</button>
        <div className="contact-content">
          <h2>Get in Touch</h2>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
          
          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <p>hello@mandinstudios.com</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>New York City, NY</p>
            </div>
          </div>
        </div>
      </div>

      {/* Home Section */}
      <div className="home-section">
        {/* Background Image with Overlay */}
        <div className="image-background-container">
          <div className="video-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="text-center w-full max-w-[1300px] mx-auto px-4">
            <div className="hero-title-container">
              <h1 className="hero-title title-unfold">Where expertise meets artistry</h1>
              <h2 className="hero-title title-unfold2">You're witnessing brilliance unfold</h2>
            </div>
            <button 
              className="meet-us-button"
              onClick={toggleContact}
            >
              Meet Us
            </button>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <div className="main-content">
        <section className="section-what-we-do">
          <WhatWeDo />
        </section>

        <section className="section-who-we-serve">
          <WhoWeServe />
        </section>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Contact Us</h3>
              <p>Email: hello@mandinstudios.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Location: New York City, NY</p>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <a href="#what-we-do">What We Do</a>
              <a href="#services">Services</a>
              <a href="#work">Our Work</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Mandin Studios. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
