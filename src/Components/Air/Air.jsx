import React from 'react';
import './Air.css';

const Air = ({ removeRocks, rockCount }) => {
  const handleHalfRocks = () => {
    removeRocks(Math.floor(rockCount / 2));
  };

  return (
    <div className="air">
      <button onClick={handleHalfRocks} disabled={rockCount === 0}>
        Half Rocks
      </button>
    </div>
  );
};

export default Air;