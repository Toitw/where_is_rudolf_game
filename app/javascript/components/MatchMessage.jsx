import React from 'react';

const MatchMessage = ({ message, isSuccess, onClose, x, y }) => {
  const backgroundColor = isSuccess ? 'green' : 'red';

  return (
    <div 
      className="match-message" 
      style={{ backgroundColor, top: y + 280, left: x + 70 }} 
      onClick={onClose}
    >
      <p>{message}</p>
    </div>
  );
};

export default MatchMessage;
