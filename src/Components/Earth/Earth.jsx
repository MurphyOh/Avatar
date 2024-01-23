import React from 'react';

import "./Earth.css";

const Earth = ({ addRocks, rockCount }) => {

  //simple addRocks call
  const handleAddRocks = (count) => {
    addRocks(count);
  };

  return (
    <div className="earth">
      {/*note the disabled check at 1000 for all buttons */}
      <button onClick={() => handleAddRocks(1)} disabled={rockCount >= 1000}>
        Add 1 Rock
      </button>
      <button onClick={() => handleAddRocks(2)} disabled={rockCount >= 1000}>
        Add 2 Rocks
      </button>
      <button onClick={() => handleAddRocks(3)} disabled={rockCount >= 1000}>
        Add 3 Rocks
      </button>
    </div>
  );
};

export default Earth;