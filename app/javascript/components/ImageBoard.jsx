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
    const xPosition = event.clientX - rect.left;
    const yPosition = event.clientY - rect.top;

    const displayedImageWidth = rect.width; // width of the image as it's being displayed
    const displayedImageHeight = rect.height; // height of the image as it's being displayed

    const x = (xPosition / displayedImageWidth) * 100;
    const y = (yPosition / displayedImageHeight) * 100;

    setClickPosition({ x, y, clicked: true });
  };

  const handleCharacterSelection = () => {
    setShowSelectionComponents(false); 
    setShowMessage(true); 
  };

  console.log(clickPosition)

  return (
      <div className="image-board-container" onClick={handleImageClick} style={{position: 'relative'}}>
        <img className="image-board" src="/assets/reindeer-bgr.jpg" alt="Game" />
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
