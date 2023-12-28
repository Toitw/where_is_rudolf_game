const ClickedArea = ({ x, y }) => {
    const style = {
      left: `${x}px`,
      top: `${y}px`,
      // Additional styling
    };
  
    return <div className="clicked-area" style={style} />;
};

export default ClickedArea;
  