
import React, { useState, useEffect } from 'react';
import SortBar from './SortBar';
import FilterBar from './FilterBar';

function BotCollection({ bots, handleEnlistBot }) {
  const [filteredBots, setFilteredBots] = useState([]);

  useEffect(() => {
    setFilteredBots(bots);
  }, [bots]);

  const handleFilter = (botClass) => {
    if (botClass === 'All') {
      setFilteredBots(bots);
    } else {
      const filtered = bots.filter(bot => bot.bot_class === botClass);
      setFilteredBots(filtered);
    }
  };

  return (
    <div>
      <h2>Bot Collection</h2>
      <SortBar bots={filteredBots} setFilteredBots={setFilteredBots} />
      <FilterBar handleFilter={handleFilter} />
      {filteredBots.map(bot => (
        <div key={bot.id}>
          <h2>{bot.name}</h2>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <button onClick={() => handleEnlistBot(bot)}>Enlist</button>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
