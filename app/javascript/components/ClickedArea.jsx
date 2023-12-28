import React from "react";

const ClickedArea = ({ x, y }) => {
    const style = {
      left: `${x}px`,
      top: `${y}px`,
    //   width: '100px',
    //   height: '100px',
    //   border: '6px dashed purple',
      backgroundColor: 'rgba(128, 128, 128, 0.5)',
      position: 'absolute',
    };
  
    return (
        <div className="clicked-area" style={style}>
        </div>
    );
};

export default ClickedArea;