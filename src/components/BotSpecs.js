import React from 'react';
import { Link } from 'react-router-dom';

function BotSpecs({ bot, handleEnlistBot }) {
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