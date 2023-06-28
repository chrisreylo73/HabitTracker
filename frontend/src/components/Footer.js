import ActionButton from './ActionButton';
import React, { useState } from 'react';
import AddUI from './AddUI';

const Footer = ({addFunc}) => {
   
   const [isVisible, setIsVisible] = useState(false);

   const handleButtonClick = () => {
    setIsVisible(!isVisible); // Toggle the visibility state when the button is clicked
  };

  return (
    <div className={`footer`}>
      <div className='footerBtns'>
        <ActionButton text="+" onClick={handleButtonClick}></ActionButton>
        <ActionButton text="--"></ActionButton>
        <ActionButton text="[ __ ]"></ActionButton>
      </div>
      {isVisible && <AddUI function={addFunc}/>}
    </div>
  );
}
export default Footer
