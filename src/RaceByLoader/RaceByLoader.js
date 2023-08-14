import React from 'react';
import './RaceByLoader.css';

const RaceByLoader = ({ color = "#000", visible = true }) => {
  if (!visible) return null;
  return (
    <div className="race-by" style={{ "--uib-color": color }}></div>
  );
};

export default RaceByLoader;
