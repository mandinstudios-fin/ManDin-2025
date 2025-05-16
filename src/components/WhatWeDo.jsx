import React from 'react';
import { Plus } from 'lucide-react';
import '../styles/WhatWeDo.css';

const WhatWeDo = () => {
  return (
    <section className="what-we-do-section">
      <h1 className="heading-title">What We Do</h1>
      <div className="what-we-do-header">
        
        <div className="heading-container">
          <h2 className="heading">
          We Don't Just Build Products
          </h2>
        </div>
        <div className="description-container">
          <p className="description">
          we create transformative digital solutions From FinTech innovations to AI-driven automation, our solutions are engineered for performance, scalability, and real-world impact.
          </p>
          <div className="cta-link">
            <span>Make the switch</span>
            <span className="cta-arrow">&#62;</span>
          </div>
        </div>
      </div>

      <div className="cards-grid">
        {/* Feature Card 1 */}
        <div className="feature-card">
          <div className="card-icon">
            {/* Layered UI visualization */}
            <div style={{ 
              position: 'relative',
              width: '100px',
              height: '100px',
              opacity: 0.8
            }}>
              <div style={{
                position: 'absolute',
                width: '80px',
                height: '80px',
                backgroundColor: '#222',
                borderRadius: '8px',
                transform: 'rotate(-15deg)',
                zIndex: 3
              }}></div>
              <div style={{
                position: 'absolute',
                width: '80px',
                height: '80px',
                backgroundColor: '#333',
                borderRadius: '8px',
                transform: 'rotate(-5deg) translateX(10px) translateY(10px)',
                zIndex: 2
              }}></div>
              <div style={{
                position: 'absolute',
                width: '80px',
                height: '80px',
                backgroundColor: '#444',
                borderRadius: '8px',
                transform: 'rotate(5deg) translateX(20px) translateY(20px)',
                zIndex: 1
              }}></div>
            </div>
          </div>
          <div className="card-bottom">
            <h3 className="card-title">
              Branding & Design
            </h3>
            <div className="plus-button">
              <Plus size={20} />
            </div>
          </div>
        </div>

        {/* Feature Card 2 */}
        <div className="feature-card">
          <div className="card-icon">
            {/* Performance metrics visualization */}
            <div style={{ position: 'relative', width: '200px', height: '80px' }}>
              <div style={{ 
                position: 'absolute', 
                right: '0',
                top: '0',
                fontSize: '12px',
                color: '#666'
              }}>
                50ms
              </div>
              <div style={{
                marginTop: '40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <div style={{ height: '1px', width: '150px', backgroundColor: '#444' }}></div>
                <div style={{ height: '1px', width: '80px', backgroundColor: '#444' }}></div>
                <div style={{ height: '1px', width: '120px', backgroundColor: '#444' }}></div>
                <div style={{ height: '1px', width: '90px', backgroundColor: '#444' }}></div>
              </div>
            </div>
          </div>
          <div className="card-bottom">
            <h3 className="card-title">Expere</h3>
            <div className="plus-button">
              <Plus size={20} />
            </div>
          </div>
        </div>

        {/* Feature Card 3 */}
        <div className="feature-card">
          <div className="card-icon">
            {/* Create button visualization */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#222',
              padding: '8px 16px',
              borderRadius: '4px',
              fontSize: '14px'
            }}>
              <span style={{ marginRight: '5px', fontSize: '16px' }}>+</span>
              <span>Create</span>
            </div>
          </div>
          <div className="card-bottom">
            <h3 className="card-title">Crafted to perfection</h3>
            <div className="plus-button">
              <Plus size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;