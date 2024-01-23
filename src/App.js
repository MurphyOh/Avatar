import React, { useCallback, useState } from 'react';
import Rock from './Components/Rock/Rock';
import Earth from './Components/Earth/Earth';
import Water from './Components/Water/Water';
import Air from './Components/Air/Air';
import Fire from './Components/Fire/Fire';

import './App.css';

function App() {
  const [rocks, setRocks] = useState([]);

  //removeRocks function dependent on changes made to the rocks array
  const removeRocks = useCallback((count) => {
    //create copy array
    const updatedRocks = [...rocks];

    //pop some rocks off of it
    for (let i = 0; i < count; i++) {
      updatedRocks.pop();
    }

    //update state variable array
    setRocks(updatedRocks);
  }, [rocks]);

  //addRocks function dependent on changes made to the rocks array
  const addRocks = useCallback((count) => {
    const newRocks = [];

    //fill array with new rock objects
    for (let i = 0; i < count; i++) {
      const newRock = {
        //unique id for purposes of x.map() function
        id: rocks.length + i,
        size: Math.floor(Math.random() * 200),
      };

      newRocks.push(newRock);
    }

    //add rocks to rocks
    setRocks([...rocks, ...newRocks]);


  }, [rocks]);

  //anytime the app component rerenders, 
  //simply check to see if the rocks are at max volume
  if (rocks.length > 1000) {
    removeRocks(rocks.length - 1000);
  }

  return (
    <div className="App">

      {/*rocks! */}
      <div className="rock-container">
        {rocks.map((rock) => (
          <Rock className="rock" key={rock.id} size={rock.size} />
        ))}
      </div>

      {/*buttons! */}
      <div className="element-container">

        {/*make rocks buttons! */}
        <Earth addRocks={addRocks} rockCount={rocks.length} />

        <Water rockCount={rocks.length} addRocks={addRocks} />

        {/*delete rocks buttons! */}
        <Air rockCount={rocks.length} removeRocks={removeRocks} />

        <Fire rockCount={rocks.length} removeRocks={removeRocks} />
      </div>

      <div className="rock-count">
        Number of Rocks: {rocks.length}
      </div>
    </div>
  );
}

export default App;