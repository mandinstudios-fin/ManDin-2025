import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Contact from './components/contact';
import WhatWeServe from './components/WhatWeServe';
import Transition from './components/Transition';
import './styles/HomePage.css';

const HomePage = () => {
  const [isWhatWeDoVisible, setIsWhatWeDoVisible] = useState(false);
  const [isWhatWeServeVisible, setIsWhatWeServeVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(Date.now());
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasScrolledToServe, setHasScrolledToServe] = useState(false);
  const [direction, setDirection] = useState('none');
  const [isClosing, setIsClosing] = useState(false);
  const [isHomeContentVisible, setIsHomeContentVisible] = useState(true);

  useEffect(() => {
    if (isWhatWeServeVisible || isContactVisible) {
      document.body.style.overflow = 'hidden';
      setIsHomeContentVisible(false);
    } else {
      // Delay showing home content to match the closing transition
      setTimeout(() => {
        document.body.style.overflow = '';
        setIsHomeContentVisible(true);
      }, 1800); // Slightly less than the contact closing animation
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isWhatWeServeVisible, isContactVisible]);

  useEffect(() => {
    let scrollTimeout;
    let isScrolling = false;

    const handleScroll = (e) => {
      if (isTransitioning || isClosing || isContactVisible) {
        e.preventDefault();
        return;
      }
      
      const now = Date.now();
      if (now - lastScrollTime < 1000 || isScrolling) {
        e.preventDefault();
        return;
      }
      
      const delta = e.deltaY;
      
      if (delta > 0 && !isWhatWeServeVisible && !hasScrolledToServe) {
        isScrolling = true;
        setIsTransitioning(true);
        setShowTransition(true);
        setLastScrollTime(now);
        setHasScrolledToServe(true);
        setDirection('down');
        setIsClosing(false);

        // Reset scroll lock after animation
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
        }, 1500);
      } else if (delta < 0 && isWhatWeServeVisible) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isWhatWeServeVisible, hasScrolledToServe, lastScrollTime, isTransitioning, isClosing, isContactVisible]);

  const handleTransitionEnd = (e) => {
    if (e.target.classList.contains('bar') && e.propertyName === 'transform') {
      const bars = document.querySelectorAll('.bar');
      const lastBar = bars[bars.length - 1];
      if (e.target === lastBar) {
        if (direction === 'down') {
          setIsWhatWeServeVisible(true);
          setDirection('none');
          setIsClosing(false);
        } else if (direction === 'up') {
          setIsWhatWeServeVisible(false);
          setHasScrolledToServe(false);
          setDirection('none');
          setIsClosing(false);
        }
        
        // Add a delay before resetting transition state
        setTimeout(() => {
          setShowTransition(false);
          setIsTransitioning(false);
        }, 300);
      }
    }
  };

  const handleMeetUsClick = () => {
    if (!isContactVisible && !isWhatWeServeVisible && !isTransitioning) {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setIsContactVisible(true);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handleContactClose = () => {
    setIsContactVisible(false);
    setIsTransitioning(true);
    // Reset transitioning state after content is visible
    setTimeout(() => {
      setIsTransitioning(false);
    }, 2000);
  };

  const handleClose = () => {
    if (!isTransitioning) {
      setIsClosing(true);
      setShowTransition(true);
      setIsTransitioning(true);
      setDirection('up');
    }
  };

  return (
    <div className="relative w-full overflow-visible bg-transparent">
      {/* Background Video with Overlay */}
      <div className={`video-container ${(!isHomeContentVisible || isTransitioning) ? 'fade-out' : 'fade-in'}`}>
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
      <div className={`hero-content ${(!isHomeContentVisible || isTransitioning) ? 'fade-out' : 'fade-in'}`}>
        <div className="text-center w-full max-w-[1300px] mx-auto px-4">
          <div className="hero-title-container">
            <h1 className="hero-title title-unfold">Where expertise meets artistry</h1>
            <h2 className="hero-title title-unfold2">You're witnessing brilliance unfold</h2>
          </div>
        </div>
      </div>

      {/* Meet Us Button */}
      <button 
        className={`button-container ${(!isHomeContentVisible || isTransitioning) ? 'fade-out' : 'fade-in'}`} 
        onClick={handleMeetUsClick}
        disabled={isTransitioning || isWhatWeServeVisible}
      >
        <h1 className="button-text">Meet Us</h1>
      </button>

      {/* Transition Effect */}
      <Transition show={showTransition} onTransitionEnd={handleTransitionEnd} isClosing={isClosing} />

      {/* What We Serve Section */}
      {isWhatWeServeVisible && <WhatWeServe onClose={handleClose} />}

      {/* Contact Section */}
      {isContactVisible && <Contact isVisible={isContactVisible} onClose={handleContactClose} />}
    </div>
  );
};

export default HomePage;
