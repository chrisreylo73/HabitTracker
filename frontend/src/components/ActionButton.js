import React, { useState } from 'react';

const ActionButton = ({ text, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if(isClicked){
      setIsClicked(false);
    }else{
      setIsClicked(true);
    }
    if(onClick){
      onClick()
    }
  };

  const styles = {
    margin: '5px',
    borderRadius: '18px',
    height: '50px',
    width: '50px',
    border: 'none',
    backgroundColor: '#343434',
    transition: 'box-shadow 0.3s ease',
    boxShadow: isClicked ? 'inset 1px 4px 4px rgba(0, 0, 0, 0.6)' : 
    isHovered ? '0 2px 4px rgba(0, 0, 0, 0.99)' : '0 2px 4px rgba(0, 0, 0, 0.6)',
    color: 'white'
  };

  return (
    <div className="sb-button">
      <button
        style={styles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
      {text}
      </button>
    </div>
  );
};

export default ActionButton;