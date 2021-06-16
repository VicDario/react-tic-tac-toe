import {useState} from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import React from 'react';

function App() {

  let [players, setPlayer] = useState(false);
  let [game, setGame] = useState([
    '', '', '',
    '', '', '',
    '', '', '',
  ])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe in React</h1>
      </header>
      <main className="main">
        {
          !players && <Menu setPlayer={setPlayer}/>
        }
        
      </main>
    </div>
  );
}

export default App;
