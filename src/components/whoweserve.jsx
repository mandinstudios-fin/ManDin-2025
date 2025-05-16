import React from 'react';
import '../styles/WhoWeServe.css';

const WhoWeServe = () => {
  return (
    <div className="who-we-serve-container">
      
      <div className="who-we-serve-grid">
        {/* First row */}
        <div className="serve-section">
          <h2>Manage projects end-to-end</h2>
          <p>Consolidate specs, milestones, tasks, and other documentation in one centralized location.</p>
          
          <div className="feature-demo">
            <div className="demo-window">
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
            </div>
          </div>
        </div>

        <div className="serve-section">
          <h2>Project updates</h2>
          <p>Communicate progress and project health with built-in project updates.</p>
          
          <div className="feature-demo">
            <div className="demo-window">
              <div className="update-card">
                <div className="status-badge">
                  <span className="status-icon">•</span>
                  <span>On track</span>
                </div>
                <p className="update-message">We are ready to launch next Thursday</p>
                <span className="update-date">Sep 8</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second row */}
      <div className="who-we-serve-grid">
        <div className="serve-section">
          <h2>Ideate and specify what to build next</h2>
          
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
          <div className="feature-demo docs-demo">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeServe;