import React from "react";
import ImageBoard from "./ImageBoard";
import Timer from "./Timer";
import Chars from "./Chars";

const GameBoard = () => {
    return (
        <div className="game-board">
            <Timer  />
            <h1>To be build</h1>
            <ImageBoard />
            <Chars />
        </div>
    );
};

export default GameBoard;