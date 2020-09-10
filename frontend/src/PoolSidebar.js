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
  return (
    <div className="PoolListItem">
      <div>
        [insert pool name here]
      </div>
      <div>
        [insert status here]
      </div>
    </div>
  )
}

const PoolSidebar = () => {
  return (
    <div className="PoolSidebar-container">
      <SelectedPool/>
      <div className="PoolList-container">
        <PoolListItem/>
        {[...new Array(40)].map(()=><PoolListItem/>)}
      </div>
    </div>
  );
}

export default PoolSidebar;
