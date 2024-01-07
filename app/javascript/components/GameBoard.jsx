import React, { useState, useEffect } from "react";
import ImageBoard from "./ImageBoard";
import Timer from "./Timer";
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

    const getImageSrc = (characterName) => {
        const characterFound = !charsLeft.some(char => char.name === characterName);
        const imageBasePath = "/assets/reindeer-";
        return `${imageBasePath}${characterName}${characterFound ? "" : "-grey"}.png`;
    };

    return (
        <div className="game-board">
            <div className="fixed-elements">
                <h1>Where is Rudolf?</h1>
                <p>Find all the reindeers as fast as you can!</p>
                <div className="reindeer-div">
                <img className="snow-reindeer" src={getImageSrc('snow')} alt="snow reindeer"/>
                    <img className="proud-reindeer" src={getImageSrc('proud')} alt="proud reindeer"/>
                    <img className="calm-reindeer" src={getImageSrc('calm')} alt="calm reindeer"/>
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