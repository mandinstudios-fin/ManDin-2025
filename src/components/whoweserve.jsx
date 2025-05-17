import React, { useEffect, useRef, useState } from 'react';
import '../styles/WhoWeServe.css';

import rm4 from '../assets/3s.png'
import c1 from '../assets/1c.png'
import b3 from '../assets/3b.png'

import n1 from '../assets/n1.png'
import n2 from '../assets/n2.png'

import ca1 from '../assets/ca1.png'
import ca2 from '../assets/ca2.png'
import ca3 from '../assets/ca3.png'

const rmimages = [
  rm4, c1, b3
];

const npimages = [
  n1, n2
];

const caimages = [
  ca1, ca2, ca3
];

const WhoWeServe = () => {
  const [rmIndex, setRmIndex] = useState(0);
  const [npIndex, setNpRmIndex] = useState(0);
  const [caIndex, setCaRmIndex] = useState(0);

  const timeoutRef = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setRmIndex((prevIndex) => (prevIndex + 1) % rmimages.length);
      setNpRmIndex((prevIndex) => (prevIndex + 1) % npimages.length);
      setCaRmIndex((prevIndex) => (prevIndex + 1) % caimages.length);
    };

    timeoutRef.current = setInterval(nextSlide, 3000); // change every 3s

    return () => clearInterval(timeoutRef.current);
  }, [rmIndex, npIndex]);



  return (
    <div id='who-we-serve' className="who-we-serve-container">
      <h2 className='heading-title'>Who we Serve</h2>

      <div className="who-we-serve-grid">
        {/* First row */}
        <div className="serve-section">
          <h2>Radio Maria</h2>
          <p>The Radio Maria mobile application is a seamless platform that brings you a rich collection of spiritual and uplifting songs, prayers, and live broadcasts. Designed to nourish the soul, this app provides a divine listening experience.</p>

          <div className="feature-demo">
            {/* <div className="demo-window">
              <div className="project-overview">
                <h3>Project Overview</h3>
                
                <div className="project-properties">
                  <div className="property-row">
                    <span>Properties</span>
                    <div className="property-tags">
                      <span className="tag in-progress">In Progress</span>
                      <span className="tag">ENG</span>
                      <span className="tag">UI</span>
                    </div>
                  </div>
                  
                  <div className="property-row">
                    <span>Resources</span>
                    <div className="property-tags">
                      <span className="tag exploration">Exploration</span>
                      <span className="tag user-interviews">User Interviews</span>
                    </div>
                  </div>
                  
                  <div className="property-row">
                    <span>Milestones</span>
                    <div className="milestone-list">
                      <div className="milestone-item">
                        <span className="milestone-icon complete">♦</span>
                        <span>Design Review</span>
                        <span>100%</span>
                      </div>
                      <div className="milestone-item">
                        <span className="milestone-icon complete">♦</span>
                        <span>Internal Alpha</span>
                        <span>100%</span>
                      </div>
                      <div className="milestone-item">
                        <span className="milestone-icon pending">○</span>
                        <span>QA</span>
                        <span>25% of 53</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="carousel">
              <div
                className="carousel-inner"
                style={{ transform: `translateX(-${rmIndex * 100}%)` }}
              >
                {rmimages.map((src, i) => (
                  <img key={i} src={src} alt={`Slide ${i}`} className="carousel-image" />
                ))}
              </div>
            </div>

            {/* <div className='feature-demo-overlay'/> */}
          </div>
        </div>

        <div className="serve-section">
          <h2>Culinary Artist</h2>
          <p>TeluguTies is a generation matrimonial platform revolutionizing the way marriages are arranged in India through our unique agent-based ecosystem. We are a team of 100+ agents who are dedicated to finding the perfect match for you.</p>

          <div className="feature-demo">
            {/* <div className="demo-window">
              <div className="update-card">
                <div className="status-badge">
                  <span className="status-icon">•</span>
                  <span>On track</span>
                </div>
                <p className="update-message">We are ready to launch next Thursday</p>
                <span className="update-date">Sep 8</span>
              </div>
            </div> */}

            <div className="carousel">
              <div
                className="carousel-inner"
                style={{ transform: `translateX(-${caIndex * 100}%)` }}
              >
                {caimages.map((src, i) => (
                  <img key={i} src={src} alt={`Slide ${i}`} className="carousel-image" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second row */}
      <div className="who-we-serve-grid">
        <div className="serve-section">
          <h2>Neon Pay</h2>

          <div className="features-list">
            <div className="feature-item active">
              <span className="feature-indicator"></span>
              <span>Collaborative documents</span>
            </div>
            <div className="feature-item">
              <span className="feature-indicator"></span>
              <span>Inline comments</span>
            </div>
            <div className="feature-item">
              <span className="feature-indicator"></span>
              <span>Text-to-issue commands</span>
            </div>
          </div>
        </div>

        <div className="serve-section">
          {/* <div className="feature-demo docs-demo">
            <div className="demo-window">
              <div className="breadcrumb">
                <span>Spice harvester</span>
                <span className="separator">›</span>
                <span>Project specs</span>
              </div>

              <div className="collaborate-section">
                <h4>Collaborate on ideas</h4>
                <p>
                  Write down product ideas and work together on feature specs in realtime, multiplayer project
                  documents. Add *style* and #structure with rich-text formatting options.
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="carousel">
            <div
              className="carousel-inner"
              style={{ transform: `translateX(-${npIndex * 100}%)` }}
            >
              {npimages.map((src, i) => (
                <img key={i} src={src} alt={`Slide ${i}`} className="carousel-image" />
              ))}
            </div>
          </div> */}
          <div className='serve-section-imgs'> 
            <img src={npimages[0]}/>
            <img src={npimages[1]}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeServe;