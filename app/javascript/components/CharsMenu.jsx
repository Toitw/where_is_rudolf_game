import React from 'react';

const CharsMenu = ({ charsLeft, x, y }) => {
  console.log(x, y)
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
        console.log('Correct character selected!');
      } else {
        console.log(character.name)
        console.log(data)
        console.log('Incorrect character selected.');
      }
    })
    .catch(error => {
      console.log('Fetch failed: ', error);
    });
  };
  

  return (
    <div className="chars-menu" style={{ top: y+280, left: x+70 }}>
      <p>Who is it?</p>
      <ul>
        {charsLeft.map(character => (
          <li key={character.id} onClick={(e) => handleCharacterClick(e, character)}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharsMenu;
