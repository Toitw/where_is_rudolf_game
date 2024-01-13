import React from 'react';

const MatchMessage = ({ message, isSuccess, onClose, x, y }) => {
  const backgroundColor = isSuccess ? 'green' : 'red';

  return (
    <div 
      className="match-message" 
      style={{ top: `${y}px`, left: `${x}px`, backgroundColor }} 
      onClick={onClose}
    >
      <p>{message}</p>
    </div>
  );
};

export default MatchMessage;
