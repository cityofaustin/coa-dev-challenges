import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.scss';
import PoolMap from './PoolMap';


const App = () => {
  const [poolData, setPoolData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get('https://data.austintexas.gov/resource/xaxa-886r.json')
      setPoolData(data)
      console.log(data)
    }
    fetchData()
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <h1>Austin Pools</h1>
      </div>
      <div className="App-content">
        <p className="App-intro">
          {/* TODO: Delete line below */}
          Open Dev Tools Console to see data.
          {/* TODO: Display data here, maybe? Be creative! 🎉 */}
        </p>
        <PoolMap/>
      </div>
      <div className="App-footer">
        Coding challenge for the <a href="https://odd.austintexas.io/" target="_blank">Office of Design and Delivery</a>
      </div>
    </div>
  );
}

export default App;
