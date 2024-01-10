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
        const characterFound = !charsLeft.some(char => char.name.split(' ')[0] === characterName); // Check if character is in charsLeft, format in db is "proud reindeer" and therefore the split
        const imageBasePath = "/assets/";
        return `${imageBasePath}${characterName}${characterFound ? "" : "-grey"}.png`;
    };

    console.log(charsLeft);

    return (
        <div className="game-board">
            <div className="fixed-elements">
                <h1>Where are my reindeers?</h1>
                <p>Find the three Santa's favorite reindeers as fast as you can!</p>
                <div className="reindeer-div">
                    <img className="snow-reindeer" src={getImageSrc('Snowflake')} alt="snowflake reindeer"/>
                    <img className="proud-reindeer" src={getImageSrc('Proud')} alt="proud reindeer"/>
                    <img className="calm-reindeer" src={getImageSrc('Zen')} alt="zen reindeer"/>
                </div>
                <Timer time={time} setTime={setTime} gameOver={gameOver} />
            </div>
            <div className="scrollable-image-board">
                <ImageBoard charsLeft={charsLeft} onGameOver={handleGameOver} setCharsLeft={setCharsLeft}/>
            </div>
            {gameOver && <WinWindow time={time} playAgain={playAgain} />}
        </div>
    );
};

export default GameBoard;