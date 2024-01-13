import React from 'react';

const ClickedArea = ({ x, y }) => {
    const style = {
      left: `${x-25}px`,
      top: `${y-25}px`,
      width: '50px',
      height: '50px',
      border: '6px dashed purple',
      backgroundColor: 'rgba(128, 128, 128, 0.5)',
      position: 'absolute',
    };
  
    return (
        <div className="clicked-area" style={style}>
        </div>
    );
};

export default ClickedArea;