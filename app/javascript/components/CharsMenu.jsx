import React from 'react';

const CharsMenu = ({ charsLeft, x, y }) => {
  return (
    <div className="chars-menu" style={{ top: y+280, left: x+70 }}>
      <p>Who is it?</p>
      <ul>
        {charsLeft.map(character => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharsMenu;
