import React, { useState } from 'react';

const ActionButton = ({ text, onClick }) => {
  const [isHovered, setIsHovered] = useState(false); // State for tracking hover state
  const [isClicked, setIsClicked] = useState(false); // State for tracking click state

  const handleMouseEnter = () => {
    setIsHovered(true); // Set isHovered state to true when mouse enters the button
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Set isHovered state to false when mouse leaves the button
  };

  const handleClick = (e) => {
    setIsClicked(true); // Set isClicked state to true to indicate the button is clicked

    // Set isClicked state back to false after 300ms to remove the click effect
    setTimeout(() => {
      setIsClicked(false);
    }, 300);

    if (onClick) {
      onClick(e); // Call the provided onClick function from prop
    }
  };

  const styles = {
    margin: '5px', // Set margin for the button
    borderRadius: '18px', // Set border radius for the button
    height: '50px', // Set height for the button
    width: '50px', // Set width for the button
    border: 'none', // Remove border of the button
    backgroundColor: '#343434', // Set background color for the button
    transition: 'box-shadow 0.3s ease', // Define transition effect for box-shadow
    boxShadow: isClicked
      ? 'inset 1px 4px 4px rgba(0, 0, 0, 0.6)' // Apply an inset box shadow when the button is clicked
      : isHovered
      ? '0 2px 4px rgba(0, 0, 0, 0.99)' // Apply a box shadow when the button is hovered
      : '0 2px 4px rgba(0, 0, 0, 0.6)', // Apply a default box shadow
    color: 'white' // Set text color for the button
  };

  return (
    <div className="addButton">
      <button
        style={styles} // Apply the styles object to the button
        onMouseEnter={handleMouseEnter} // Event handler for mouse enter event
        onMouseLeave={handleMouseLeave} // Event handler for mouse leave event
        onClick={handleClick} // Event handler for button click event
      >
        {text} {/* Display the button text */}
      </button>
    </div>
  );
};

export default ActionButton;
