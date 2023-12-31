import React from 'react';
import MatchMessage from './MatchMessage';
import { useState } from 'react';


const CharsMenu = ({ charsLeft, x, y, showMessage, setShowMessage }) => {
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
      body: JSON.stringify({ clicked_frame: { x, y } }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.status === 'found' && data.name === character.name) {
        setMessage(`You found ${character.name}!`);
        setIsSuccess(true);
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
  

  return (
    <>
      {!showMessage ? (
       <>
        <div className="clicked-area" style={{ top: y+280, left: x-50 }}></div>
        <div className="chars-menu" style={{ top: y+280, left: x+70 }}>
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
