import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

import './PoolSidebar.scss';

const PoolSidebar = () => {
  return (
    <div className="PoolSidebar-container">
      <SelectedPool/>
      <div className="PoolList-container">
        <PoolListItem name="[insert pool name here]" status="[insert status here]"/>
        <PoolListItem name="[insert pool name here]" status="[insert status here]"/>
        <PoolListItem name="[insert pool name here]" status="[insert status here]"/>
      </div>
    </div>
  );
}

const SelectedPool = ({name, type, status, url}) => {
  return (
    <div className="SelectedPool-container">
      <div className="SelectedPool-content">
        <div className="SelectedPool-name">
          [insert pool name here]
        </div>
        <div className="SelectedPool-data">
          Pool Type: [insert pool type here]
        </div>
        <div className="SelectedPool-data">
          Status: [insert status here]
        </div>
        <div className="SelectedPool-data">
          Website: <a href="[insert url here]" target="_blank" rel="noopener noreferrer">[insert url here]</a>
        </div>
      </div>
      <DeselectPoolButton/>
    </div>
  )
}

const DeselectPoolButton = () => (
  <CloseIcon className="DeselectPoolButton" onClick={()=>{}}/>
)

const PoolListItem = ({name, status}) => {
  return (
    <div className="PoolListItem">
      <div>
        {name}
      </div>
      <div>
        {status}
      </div>
    </div>
  )
}

export default PoolSidebar;
