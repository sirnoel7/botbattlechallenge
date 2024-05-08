
import React from 'react';

function SortBar({ bots, setFilteredBots }) {
  const handleSort = (type) => {
    const sortedBots = [...bots].sort((a, b) => b[type] - a[type]);
    setFilteredBots(sortedBots);
  };

  return (
    <div>
      <button onClick={() => handleSort('health')}>Sort by Health</button>
      <button onClick={() => handleSort('damage')}>Sort by Damage</button>
      <button onClick={() => handleSort('armor')}>Sort by Armor</button>
    </div>
  );
}

export default SortBar;
