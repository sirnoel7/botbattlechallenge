
import React from 'react';
import { Link } from 'react-router-dom';

function BotSpecs({ match, bots, handleEnlistBot }) {
  const botId = match.params.botId;
  const bot = bots.find(bot => bot.id === parseInt(botId));

  return (
    <div>
      <h2>{bot.name}</h2>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={() => handleEnlistBot(bot)}>Enlist</button>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default BotSpecs;
