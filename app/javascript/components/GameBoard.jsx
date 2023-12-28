import React, { useState, useEffect } from "react";
import ImageBoard from "./ImageBoard";
import Timer from "./Timer";
import Chars from "./Chars";

const GameBoard = () => {
    const [charsLeft, setCharsLeft] = useState([]);

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

    console.log(charsLeft)

    return (
        <div className="game-board">
            <h2>Characters Left:</h2>
            {charsLeft.map(char => (
                <p key={char.id}>{char.name}</p>
            ))}
            <Timer />
            <h1>To be build</h1>
            <ImageBoard charsLeft={charsLeft} setCharsLeft={setCharsLeft} />
            <Chars charsLeft={charsLeft} setCharsLeft={setCharsLeft} />
        </div>
    );
};

export default GameBoard;