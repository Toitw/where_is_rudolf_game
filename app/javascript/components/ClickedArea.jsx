import React from 'react';

const ClickedArea = ({ x, y }) => {

    const style = {
      left: `${x-20}px`,
      top: `${y-20}px`,
      width: '40px',
      height: '40px',
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