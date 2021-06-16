import './Menu.css';
function Main (props) {
    let name1 = '';
    let name2 = '';

    const setName1 = (e) => {
        name1 = e.target.value;
    }

    const setName2 = (e) => {
        name2 = e.target.value;
    }

    const initGame = (e) => {
        if(name1 === '' || name2 === '') return;
        props.setPlayer({"player1": name1, "player2": name2});
    }

    return (
        <div className="menu">
            <h2 className="menu__title">Choose your weapon</h2>
            <div className="menu__input">
                <input type="text" id="playerOne" placeholder="Player 1 Name" onChange={setName1} />
                <input type="text" id="playerTwo" placeholder="Player 2 Name" onChange={setName2}/>
            </div>
            <div className="menu__button">
                <div type="button" className="button X" name="playerName" onClick={initGame}>x</div>
                <div type="button" className="button O" name="playerName" onClick={initGame}>o</div>
            </div>
        </div>
    );
}

export default Main;