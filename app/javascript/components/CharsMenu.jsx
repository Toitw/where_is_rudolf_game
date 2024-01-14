import React from 'react';
import MatchMessage from './MatchMessage';
import { useState } from 'react';
import ClickedArea from './ClickedArea';


const CharsMenu = ({ charsLeft, setCharsLeft, x, y, xPercentage, yPercentage, showMessage, setShowMessage, onGameOver, imageSize }) => {
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCharacterClick = (event, character) => {
    event.stopPropagation();

    fetch('/characters/clicked_frame', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ clicked_frame: { xPercentage, yPercentage } }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.status === 'found' && data.name === character.name) {
        const newCharsLeft = charsLeft.filter(char => char.name !== character.name);
        setCharsLeft(newCharsLeft);
        setMessage(`You found ${character.name}!`);
        setIsSuccess(true);

        if (newCharsLeft.length === 0) {
          onGameOver(); 
        }
      } else {
        setMessage("Nope, keep looking!");
        setIsSuccess(false);
      }
      setShowMessage(true);
    })
    .catch(error => {
      console.log('Fetch failed: ', error);
    });
  };

  const calculateMenuPosition = () => {
    const menuWidth = 150; 

    let leftPosition = x + 50; // Default position to the right of the click

    // Check if the menu goes out of the viewport
    if (leftPosition + menuWidth > imageSize.width) {
      if (window.innerWidth > 600) { // 600px is a common breakpoint for mobile devices
        leftPosition = x - menuWidth - 50; // Adjust position to the left of the click for big screens
      } else {
        leftPosition = x - menuWidth - 15; // Adjust position to the left of the click for small screens
      }
    }

    return leftPosition;
  };

  const menuLeftPosition = calculateMenuPosition();
  

  return (
    <>
      {!showMessage ? (
       <>
        <ClickedArea x={x} y={y} imageSize={imageSize}/>
        <div className="chars-menu" style={{ top: y-50, left: menuLeftPosition }}>
          <p>Who is it?</p>
          <ul>
            {charsLeft.map(character => (
              <li key={character.id} onClick={(e) => handleCharacterClick(e, character)}>{character.name}</li>
            ))}
          </ul>
        </div>
       </>
      ) : (
        <MatchMessage message={message} isSuccess={isSuccess} onClose={() => setShowMessage(false)} x={x} y={y}/>
      )}
    </>
  );
};

export default CharsMenu;
