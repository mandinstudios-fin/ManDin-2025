import React, { useState, useEffect } from 'react';
import '../styles/contact.css';

const Contact = ({ isVisible, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    // Wait for the longest animation to complete (2.2s) before actually closing
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 2000);
  };

  // Reset closing state when visibility changes
  useEffect(() => {
    if (isVisible) {
      setIsClosing(false);
    }
  }, [isVisible]);

  return (
    <div className={`contact-container ${isVisible ? 'visible' : ''} ${isClosing ? 'closing' : ''}`}>
      <div className="contact-inner">
        <button className="close-button" onClick={handleClose}>
          <span className="close-icon"></span>
        </button>

        <section className="content-section">
          <div className="content-wrapper">
            <h1 className="title">Let's Create Something Amazing</h1>
            <div className="contact-content">
              <div className="contact-info">
                <h2>Get in Touch</h2>
                <p>Ready to transform your vision into reality? We're here to help bring your ideas to life.</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <span className="contact-label">Email</span>
                    <p>hello@mandinstudios.com</p>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Phone</span>
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Location</span>
                    <p>New York City, NY</p>
                  </div>
                </div>
              </div>
              <div className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Name" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" className="form-input" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" className="form-input form-textarea"></textarea>
                </div>
                <button className="submit-button">Send Message</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact; 