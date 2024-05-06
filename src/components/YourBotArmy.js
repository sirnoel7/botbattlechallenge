// YourBotArmy.js
import React from 'react';

function YourBotArmy({ enlistedBots, handleReleaseBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {enlistedBots.map(bot => (
        <div key={bot.id}>
          <h2>{bot.name}</h2>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <button onClick={() => handleReleaseBot(bot)}>Release</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;
