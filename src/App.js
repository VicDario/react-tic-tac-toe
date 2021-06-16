import {useState} from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Game from './components/Game/Game'

function App() {

  let [players, setPlayer] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe in React</h1>
      </header>
      <main className="main">
        {
          !players ? <Menu setPlayer={setPlayer}/> :
          <Game players={players} />
        }
        
      </main>
    </div>
  );
}

export default App;
