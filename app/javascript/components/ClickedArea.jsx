import React from "react";

const ClickedArea = ({ x, y }) => {
    const style = {
      left: `${x}px`,
      top: `${y}px`,
      // Additional styling
    };
  
    return (
        <div className="clicked-area" style={style}>;
            <h2>Clicked Area</h2>
        </div>
    );
};

export default ClickedArea;
  