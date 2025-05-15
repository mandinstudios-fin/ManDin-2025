import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import WhatWeDo from './components/WhatWeDo';
import './styles/HomePage.css';

const HomePage = () => {
  const [isWhatWeDoVisible, setIsWhatWeDoVisible] = useState(false);

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
      <button className="button-container" onClick={handleMeetUsClick}>
        <h1 className="button-text">Meet Us</h1>
      </button>

      {/* What We Do Section */}
      <WhatWeDo isVisible={isWhatWeDoVisible} onClose={handleClose} />
    </div>
  );
};

export default HomePage;
