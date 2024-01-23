import React, { memo, useState } from 'react';

import './Rock.css';

const Rock = ({ size }) => {
  //store size as a state variable
  const [currSize, setCurrSize] = useState(size);

  //generate new size and apply it via changing the state variable
  const handleClick = () => {
    const newRandomSize = Math.floor(Math.random() * size);
    //note, the boulder may turn into the pebble and be barely visible
    //Just change the first number in the 'max.' function
    const newSize = Math.max(40, (newRandomSize / 100) * 300);

    setCurrSize(newSize);
  }

  // Define the style object to apply to the 'div' element
  //changes on rerender (caused by state variable change I think)
  const rockStyle = {
    width: currSize,
    height: currSize,
  };

  return (
    <div className="rock" style={rockStyle} onClick={handleClick}>
      <img
        src="https://assets.mycast.io/characters/the-boulder-58605-normal.jpg?1604043291"
        alt="Rock"
      />
    </div>
  );
};

export default memo(Rock);