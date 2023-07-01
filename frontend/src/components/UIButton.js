import React, { useState } from 'react';

const UIButton = ({text, textcolor, bkcolor, width, height, func}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const handleClick = (e) => {
    func(e);
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };
  
   const buttonStyle = {
      backgroundColor: bkcolor,
      width: isHovered ? `${parseFloat(width) + 2}px`: width,
      height: isHovered ? `${parseFloat(height) + 2}px` : height,
      borderRadius: "7px",
      border: "none",
      transition: 'box-shadow 0.4s ease, width 0.2s ease, height 0.2s ease',
      boxShadow: isClicked
      ? 'inset 0 2px 4px rgba(0, 0, 0, 0.6)'
      : isHovered
      ? '0 2px 4px rgba(0, 0, 0, 0.6)'
      : '0 2px 4px rgba(0, 0, 0, 0.3)',
      margin: "4px"
   };
   return (
    <div>
      <button 
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >{text}</button>
    </div>
  )
}

export default UIButton
