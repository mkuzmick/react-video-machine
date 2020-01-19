import React from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './components/Player'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Player id="test_id_007" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

    </div>
  );
}

export default App;
