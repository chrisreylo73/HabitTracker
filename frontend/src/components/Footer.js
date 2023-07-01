import ActionButton from './ActionButton';
import React, { useState } from 'react';

const Footer = ({add}) => {
   
  const [newItem, setNewItem] = useState('');

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim() !== '') {
      add(newItem);
      setNewItem('');
    }
  };

  return (
    <div className='footer'>
      <div className='footerBtns'>
        <ActionButton text="+" onClick={handleSubmit}></ActionButton>
        <div className='ui-input'>
            <input 
              type='text' 
              placeholder="Title"
              value={newItem}
              onChange={handleInputChange}
            />
        </div>
      </div>
    </div>
  );
}
export default Footer
