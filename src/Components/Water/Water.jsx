import React from 'react';
import './Water.css';

const Water = ({ addRocks, rockCount }) => {

    //simple addRocks call
    const handleDoubleRocks = () => {
        addRocks(rockCount);
    };

    return (
        <div className="water">
        {/*Note: disabled at rockCount more than or exactly 1000 and at rockCount = 0 */}
            <button onClick={handleDoubleRocks} disabled={rockCount >= 1000 || rockCount === 0}>
                Double Rocks
            </button>
        </div>
    );
};

export default Water;