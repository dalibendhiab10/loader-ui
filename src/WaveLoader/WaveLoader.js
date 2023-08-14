import React from 'react';
import './WaveLoader.css';

const WaveLoader = ({ color = "#000", visible = true }) => {
  if (!visible) return null;
  return (
    <div className="waveform" style={{ "--uib-color": color }}>
      <div className="waveform__bar"></div>
      <div className="waveform__bar"></div>
      <div className="waveform__bar"></div>
      <div className="waveform__bar"></div>
    </div>
  );
};

export default WaveLoader;
