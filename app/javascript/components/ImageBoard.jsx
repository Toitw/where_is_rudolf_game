import React, { useState } from 'react';
import ClickedArea from './ClickedArea';
import CharsMenu from './CharsMenu';


const ImageBoard = ({charsLeft}) => {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0, clicked: false });

  const handleImageClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setClickPosition({ x, y, clicked: true });
  };

  return (
    <div className="image-board" onClick={handleImageClick}>
      <img src="/assets/reindeer-bgr.jpg" alt="Game" />
      {clickPosition.clicked && (
        <>
          <ClickedArea x={clickPosition.x} y={clickPosition.y} />
          <CharsMenu charsLeft={charsLeft} x={clickPosition.x} y={clickPosition.y} />
        </>
      )}
    </div>
  );
};

export default ImageBoard;
