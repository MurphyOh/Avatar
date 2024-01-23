import React from 'react';
import './Fire.css';

const Fire = ({ removeRocks, rockCount }) => {

  //simple removeRocks call
  const handleDestroyRocks = () => {
    removeRocks(rockCount);
  };

  return (
    <div className="fire">
      {/*Note: disabled at rockCount = 0 */}
      <button onClick={handleDestroyRocks} disabled={rockCount === 0}>
        Destroy All Rocks
      </button>
    </div>
  );
};

export default Fire;