import { useState } from 'react';
import './Game.css';

function Game (props) {
    let [winner, setWinner] = useState(false);
    let [turn, setTurn] = useState(true);
    let [game, setGame] = useState([
        '', '', '',
        '', '', '',
        '', '', '',
    ]);
    let [isPaused, setPause] = useState(false);

    const handlePlay = (key) => {
        if(game[key] !== '' || isPaused ) return;
        let updatedGame = game.map((item, itemNumber) => {
            if(itemNumber === key){
                if(turn) return 'X';
                else return 'O';
            }
            return item;
        })
        setGame(updatedGame);
        checkWin(updatedGame);
        setTurn(!turn);
    } 

    const resetGame = () => {
        setGame([
            '', '', '',
            '', '', '',
            '', '', '',
         ]);
        setTurn(true);
        setWinner(false);
        setPause(false);
    }

    const checkWin = (game) => {
        let win = false;
        if      (game[0] === game[1] && game[0] === game[2] && (game[0] === 'X' || game[0] === 'O')) win = true;
        else if (game[3] === game[4] && game[3] === game[5] && (game[3] === 'X' || game[3] === 'O')) win = true;
        else if (game[6] === game[7] && game[6] === game[8] && (game[6] === 'X' || game[6] === 'O')) win = true; //Horizontal checks

        else if (game[0] === game[3] && game[0] === game[6] && (game[0] === 'X' || game[0] === 'O')) win = true;
        else if (game[1] === game[4] && game[1] === game[7] && (game[1] === 'X' || game[1] === 'O')) win = true;
        else if (game[2] === game[5] && game[2] === game[7] && (game[2] === 'X' || game[2] === 'O')) win = true; //Vertical checks

        else if (game[0] === game[4] && game[0] === game[8] && (game[0] === 'X' || game[0] === 'O')) win = true;
        else if (game[2] === game[4] && game[2] === game[6] && (game[2] === 'X' || game[2] === 'O')) win = true; // Diagonal checks

        if (win === true) {
            turn ? setWinner(props.players.player1) : setWinner(props.players.player2);
            setPause(true);
        }
    }

    return (
        <div className="game">
            {
                winner ? 
                <h2 className="title-game win">{winner} wins!</h2> :
                <h2 className="title-game turn">It´s the {turn ? props.players.player1 : props.players.player2} turns</h2>
            }
            {
                game.map((item, key)=> {
                    return <div className={`item item${key}`} key={key} onClick={() => handlePlay(key)} >{item}</div>
                })
            }
            <button className="reset-button" onClick={resetGame}>Start over</button>
        </div>
    );
}

export default Game;