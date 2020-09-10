import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';

import './PoolList.scss';

const DeselectPoolButton = () => {
  return (
    <CloseIcon className="DeselectPoolButton" onClick={()=>{}}/>
  )
}

const SelectedPool = () => {
  return (
    <div className="SelectedPool-container">
      <div className="SelectedPool-content">
        <div className="SelectedPool-name">
          [insert pool name here]
        </div>
        <div className="SelectedPool-data">
          Pool Type: {/**insert pool type here**/}
        </div>
        <div className="SelectedPool-data">
          Status: {/**insert status here**/}
        </div>
        <div className="SelectedPool-data">
          Website: <a href="insert url here">{/**insert url here**/}</a>
        </div>
      </div>
      <DeselectPoolButton/>
    </div>
  )
}

const PoolListItem = () => {
  return null
}

const PoolList = () => {
  const [selectedPool, setSelectedPool] = useState({});

  return (
    <div className="PoolList-container">
      <SelectedPool/>
      A list
    </div>
  );
}

export default PoolList;
