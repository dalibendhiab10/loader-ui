import React from 'react';
import './RingLoader.css';

const RingLoader = ({ color = "#000", visible = true }) => {
  if (!visible) return null;
  return (
    <svg className="ring" viewBox="25 25 50 50" strokeWidth="5" style={{ "--uib-color": color }}>
      <circle cx="50" cy="50" r="20" />
    </svg>
  );
};

export default RingLoader;
