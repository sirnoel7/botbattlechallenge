import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BotSpecs from './components/BotSpecs';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Bot Battlr</h1>
        <Switch>
          <Route path="/" exact component={BotCollection} />
          <Route path="/bots/:botId" component={BotSpecs} />
        </Switch>
        <YourBotArmy />
      </div>
    </Router>
  );
}

export default App;