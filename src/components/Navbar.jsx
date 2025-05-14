import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const navItems = [
  { id: 1, title: 'What We Do', path: '/what-we-do' },
  { id: 2, title: 'Why Us', path: '/why-us' },
  { id: 3, title: 'Our Work', path: '/our-work' },
  { id: 4, title: 'Team', path: '/team' },
  { id: 5, title: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`navbar fixed top-0 left-0 w-full z-30 ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Brand Logo */}
          <div className="brand-wrapper">
            <img src="/Logo.png" alt="ManDin Studios" className="brand-logo" />
          </div>

          {/* Right side navigation */}
          <div className="nav-controls">
            <button className="svalbard-button">
              <span className="button-text">Explore</span>
              <span className="button-icon"></span>
            </button>
            <div className="menu-container">
              <button className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen navigation menu */}
      <div className={`full-page-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="menu-close-button" onClick={toggleMenu}>
          <span className="close-icon"></span>
          <span className="close-text"></span>
        </button>
        <div className="menu-content">
          <div className="menu-items">
            {navItems.map((item, index) => (
              <div key={item.id} className="menu-item-wrapper" style={{ transitionDelay: `${index * 0.1}s` }}>
                <a href={item.path} className="menu-item" onClick={() => setIsMenuOpen(false)}>
                  <span className="menu-item-number">{String(item.id).padStart(2, '0')}</span>
                  <span className="menu-item-title">{item.title}</span>
                  <span className="menu-item-arrow">→</span>
                </a>
              </div>
            ))}
          </div>
          <div className="menu-footer">
            <div className="social-links">
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;