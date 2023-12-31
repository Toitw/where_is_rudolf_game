import React, { useState } from 'react';
import CharsMenu from './CharsMenu';

const ImageBoard = ({charsLeft, setCharsLeft, onGameOver}) => {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0, clicked: false });
  const [showSelectionComponents, setShowSelectionComponents] = useState(true);
  const [showMessage, setShowMessage] = useState(false); // Lifted state

  const handleImageClick = (event) => {
    if (showMessage) {
      setShowMessage(false); // Hide message on any click when showMessage is true
    } else if (!showSelectionComponents) {
      setShowSelectionComponents(true); // Reset to show components again
    }
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setClickPosition({ x, y, clicked: true });
  };

  const handleCharacterSelection = () => {
    setShowSelectionComponents(false); 
    setShowMessage(true); 
  };

  return (
    <div className="image-board" onClick={handleImageClick}>
      <img src="/assets/reindeer-bgr.jpg" alt="Game" />
      {clickPosition.clicked && showSelectionComponents && (
        <CharsMenu 
          charsLeft={charsLeft} 
          setCharsLeft={setCharsLeft}
          x={clickPosition.x} 
          y={clickPosition.y} 
          onCharacterSelect={handleCharacterSelection} 
          showMessage={showMessage}
          setShowMessage={setShowMessage}
          onGameOver={onGameOver}
        />
      )}
    </div>
  );
};

export default ImageBoard;
