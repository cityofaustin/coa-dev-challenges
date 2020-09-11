import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

import './PoolSidebar.scss';

const PoolSidebar = ({pools, selectedPool, setSelectedPool}) => {
  return (
    <div className="PoolSidebar-container">
      {selectedPool && (
        <SelectedPool
          pool={selectedPool}
          setSelectedPool={setSelectedPool}
        />
      )}
      <div className="PoolList-container">
        {pools.map((pool,i)=>(
          <PoolListItem
            key={i}
            pool={pool}
            setSelectedPool={setSelectedPool}
          />
        ))}
      </div>
    </div>
  );
}

const SelectedPool = ({pool, setSelectedPool}) => {
  return (
    <div className="SelectedPool-container">
      <div className="SelectedPool-content">
        <div className="SelectedPool-name">
          {pool.pool_name}
        </div>
        <div className="SelectedPool-data">
          {pool.pool_type}
        </div>
        <div className="SelectedPool-data">
          {pool.status}
        </div>
        <div className="SelectedPool-data">
          Website: <a href={pool.website.url} target="_blank" rel="noopener noreferrer">{pool.website.url}</a>
        </div>
      </div>
      <DeselectPoolButton
        setSelectedPool={setSelectedPool}
      />
    </div>
  )
}

const DeselectPoolButton = ({setSelectedPool}) => (
  <CloseIcon
    className="DeselectPoolButton"
    onClick={()=>setSelectedPool(null)}
  />
)

const PoolListItem = ({pool, setSelectedPool}) => {
  return (
    <div
      className="PoolListItem"
      onClick={()=>setSelectedPool(pool)}
    >
      <div>
        {pool.pool_name}
      </div>
      <div>
        {pool.status}
      </div>
    </div>
  )
}

export default PoolSidebar;
