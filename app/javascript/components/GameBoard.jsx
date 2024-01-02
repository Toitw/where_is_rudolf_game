import React, { useState, useEffect } from "react";
import ImageBoard from "./ImageBoard";
import Timer from "./Timer";
import Chars from "./Chars";
import WinWindow from "./WinWindow";

const GameBoard = () => {
    const [charsLeft, setCharsLeft] = useState([]);
    const [time, setTime] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        fetch('/api/characters')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setCharsLeft(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleGameOver = () => {
        setGameOver(true); 
    };

    const playAgain = () => {
        setTime(0);
        setGameOver(false);
        fetch('/api/characters')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setCharsLeft(data))
            .catch(error => console.error('Error:', error));
            window.location.reload();
    }

    return (
        <div className="game-board">
            <h2>Characters Left:</h2>
            {charsLeft.map(char => (
                <p key={char.id}>{char.name}</p>
            ))}
            <Timer time={time} setTime={setTime} gameOver={gameOver} />
            <ImageBoard charsLeft={charsLeft} onGameOver={handleGameOver} setCharsLeft={setCharsLeft}/>
            <Chars charsLeft={charsLeft} setCharsLeft={setCharsLeft} />
            {gameOver && <WinWindow time={time} playAgain={playAgain} />}
        </div>
    );
};

export default GameBoard;