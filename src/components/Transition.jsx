import React, { useCallback, memo, useEffect } from 'react';
import '../styles/Transition.css';

const Transition = memo(({ show, onTransitionEnd, isClosing }) => {
  const handleTransitionEnd = useCallback((e) => {
    if (e.target.classList.contains('bar') && e.propertyName === 'transform') {
      onTransitionEnd(e);
    }
  }, [onTransitionEnd]);

  // Force a re-render when show changes to ensure transitions trigger
  useEffect(() => {
    if (show) {
      // Force a reflow to ensure transitions trigger
      void document.body.offsetHeight; // Using void operator to handle the expression
    }
  }, [show]);

  return (
    <div 
      className={`overlay ${show ? 'show' : ''} ${isClosing ? 'closing' : ''}`} 
      onTransitionEnd={handleTransitionEnd}
    >
      {[...Array(10)].map((_, index) => (
        <div 
          key={index} 
          className="bar"
          style={{ 
            transitionDelay: `${index * 0.03}s`,
            left: `${index * 10}%`,
            backgroundPosition: `${-index * 100}% center`
          }}
        />
      ))}
    </div>
  );
});

Transition.displayName = 'Transition';

export default Transition; 