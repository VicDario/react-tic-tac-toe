import {useState} from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Game from './components/Game/Game'

function App() {

  let [players, setPlayer] = useState(false);
  let [turn, setTurn] = useState(true);
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
          !players ? <Menu setPlayer={setPlayer}/> :
          <Game game={game} setGame={setGame}  players={players} turn={turn} setTurn={setTurn} />
        }
        
      </main>
    </div>
  );
}

export default App;
