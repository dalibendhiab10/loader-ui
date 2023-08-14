import React from 'react';
import './PulsarLoader.css';

const PulsarLoader = ({ color = "#000", visible = true }) => {
  if (!visible) return null;
  return (
    <div className="pulsar" style={{ "--uib-color": color }}></div>
  );
};

export default PulsarLoader;
