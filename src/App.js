
import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  const handleEnlistBot = (bot) => {
    setEnlistedBots([...enlistedBots, bot]);
  };

  const handleReleaseBot = (bot) => {
    setEnlistedBots(enlistedBots.filter(b => b.id !== bot.id));
  };

  return (
    <Router>
      <div className="App">
        <h1>Bot Battlr</h1>
        <Route path="/" exact render={(props) => (
          <BotCollection {...props} bots={bots} handleEnlistBot={handleEnlistBot} />
        )} />
        <Route path="/bots/:botId" render={(props) => (
          <BotSpecs {...props} bots={bots} handleEnlistBot={handleEnlistBot} />
        )} />
        <YourBotArmy enlistedBots={enlistedBots} handleReleaseBot={handleReleaseBot} />
      </div>
    </Router>
  );
}

export default App;
