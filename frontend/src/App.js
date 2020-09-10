import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.scss';
import PoolMap from './PoolMap';
import PoolSidebar from './PoolSidebar';

const App = () => {
  const [poolData, setPoolData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get('https://data.austintexas.gov/resource/xaxa-886r.json')
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
        <div className="App-content-column">
          <PoolSidebar/>
        </div>
        <div className="App-content-column">
          <PoolMap/>
        </div>
      </div>
      <div className="App-footer">
        Coding challenge for the <a href="https://odd.austintexas.io/" target="_blank" rel="noopener noreferrer">Office of Design and Delivery</a>
      </div>
    </div>
  );
}

export default App;
