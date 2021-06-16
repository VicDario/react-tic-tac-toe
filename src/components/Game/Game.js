import './Game.css'

function Game (props) {

    const handlePlay = (key) => {
        if(props.game[key] !== '') return;
        let updatedGame = props.game.map((item, itemNumber) => {
            if(itemNumber === key){
                if(props.turn) return 'X';
                else return 'O';
            }
            return item;
        })
        props.setGame(updatedGame);
        props.setTurn(!props.turn);
    } 

    const resetGame = () => {
        props.setGame([
            '', '', '',
            '', '', '',
            '', '', '',
         ]);
        props.setTurn(true);
    }

    return (
        <div className="game">
            <h2 className="turn">It´s the {props.turn ? props.players.player1 : props.players.player2}</h2>
            {
                props.game.map((item, key)=> {
                    return <div className={`item item${key}`} key={key} onClick={() => handlePlay(key)} >{item}</div>
                })
            }
            <button className="reset-button" onClick={resetGame}>Start over</button>
        </div>
    );
}

export default Game;