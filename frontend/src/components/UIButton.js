import React, { useState } from 'react';

const UIButton = ({text, backgroundColor, width, height, func}) => {
  // State to track whether the button is being hovered
  const [isHovered, setIsHovered] = useState(false);

  // State to track whether the button is being clicked
  const [isClicked, setIsClicked] = useState(false);

  // Event handler for mouse enter event
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Event handler for mouse leave event
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  // Event handler for button click event
  const handleClick = (e) => {
    func(e); // Call the provided function from the prop
    setIsClicked(true);
    // Set isClicked state back to false after 300ms to remove the click effect
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };
  
  // Style object for the button
  const buttonStyle = {
    backgroundColor: backgroundColor, // Set the background color of the button
    width: isHovered ? `${parseFloat(width) + 2}px`: width, // Increase the width by 2px when hovered
    height: isHovered ? `${parseFloat(height) + 2}px` : height, // Increase the height by 2px when hovered
    borderRadius: "7px", // Set the border radius of the button
    border: "none", // Remove the border of the button
    transition: 'box-shadow 0.4s ease, width 0.2s ease, height 0.2s ease', // Define transition effects for box-shadow, width, and height
    boxShadow: isClicked
      ? 'inset 0 2px 4px rgba(0, 0, 0, 0.6)' // Apply an inset box shadow when the button is clicked
      : isHovered
      ? '0 2px 4px rgba(0, 0, 0, 0.6)' // Apply a box shadow when the button is hovered
      : '0 2px 4px rgba(0, 0, 0, 0.3)', // Apply a default box shadow
    margin: "4px" // Set margin around the button
  };

  return (
    <div>
      <button 
        style={buttonStyle} // Apply the buttonStyle to the button
        onMouseEnter={handleMouseEnter} // Event handler for mouse enter event
        onMouseLeave={handleMouseLeave} // Event handler for mouse leave event
        onClick={handleClick} // Event handler for button click event
      >{text}</button> {/* Display the button text */}
    </div>
  );
}

export default UIButton;