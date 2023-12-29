import React from 'react';

const CharsMenu = ({ charsLeft, x, y }) => {
  return (
    <div className="chars-menu" style={{ top: y-100, left: x }}>
      <h2>Chars menus</h2>
      <ul>
        {charsLeft.map(character => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharsMenu;
