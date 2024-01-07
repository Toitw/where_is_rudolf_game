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
            <div className="fixed-elements">
                <h1>Where is Rudolf?</h1>
                <p>Find all the reindeers as fast as you can!</p>
                <div className="reindeer-div">
                    <img className="snow-reindeer" src="/assets/reindeer-snow-grey.png" alt="snow-reindeer"/>
                    <img className="proud-reindeer" src="/assets/reindeer-proud-grey.png" alt="snow-reindeer"/>
                    <img className="calm-reindeer" src="/assets/reindeer-calm-grey.png" alt="snow-reindeer"/>
                </div>
                <Timer time={time} setTime={setTime} gameOver={gameOver} />
            </div>
            <div className="scrollable-image-board">
                <ImageBoard charsLeft={charsLeft} onGameOver={handleGameOver} />
            </div>
            {gameOver && <WinWindow time={time} playAgain={playAgain} />}
        </div>
    );
};

export default GameBoard;