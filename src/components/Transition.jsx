import React from 'react';
import '../styles/Transition.css';

const Transition = ({ show, onTransitionEnd, isClosing }) => {
  return (
    <div 
      className={`overlay ${show ? 'show' : ''} ${isClosing ? 'closing' : ''}`} 
      onTransitionEnd={onTransitionEnd}
    >
      {[...Array(10)].map((_, index) => (
        <div key={index} className="bar" />
      ))}
    </div>
  );
};

export default Transition; 