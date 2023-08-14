import React from 'react';
import './DotspinnerLoader.css';

const DotspinnerLoader = ({ color = "#000", visible = true }) => {
  if (!visible) return null;
  return (
    <div className="dot-spinner" style={{ "--uib-color": color }}>
      {[...Array(8)].map((_, index) => (
        <div className="dot-spinner__dot" key={index}></div>
      ))}
    </div>
  );
};

export default DotspinnerLoader;
