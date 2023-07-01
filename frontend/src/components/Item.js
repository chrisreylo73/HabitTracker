import React, { useState } from 'react';
import UIButton from "./UIButton";

// Define a functional component called Item that accepts the 'item', 'del', and 'update' props
const Item = ({ item, del, update }) => {
  // Declare state variables
  const [isChecked, setIsChecked] = useState(false); // Checkbox state
  const [isEditing, setIsEditing] = useState(false); // Editing state
  const [editValue, setEditValue] = useState(item.description); // Edit value state

  // Event handler for checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Acts like a toggle
  };

  // Style object for the label
  const style = {
    textDecoration: isChecked ? 'line-through' : 'none',
    userSelect: 'none', // Disable text selection
    cursor: 'default', // Remove cursor effects
  };

  // Event handler for input change during editing
  // e represents object triggered by event
  const handleInputChange = (e) => {
    setEditValue(e.target.value); // Update the value of the editValue state with the value entered in the target element (input field)
  };

  // Event handler for double-clicking on the label to start editing
  const handleLabelDoubleClick = () => {
    setIsEditing(true);
  };

  // Event handler for input blur (losing focus) to finish editing
  const handleInputBlur = () => {
    finishEditing();
  };

  // Event handler for input keydown to finish editing when Enter key is pressed
  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      finishEditing();
    }
  };

  // Function to finish editing and update the item's description
  const finishEditing = () => {
    setIsEditing(false);
    update(item.id, editValue);
  };

  // Render the Item component
  return (
    <div className="item-container"> 
      <label className="checkbox-container" style={style} onDoubleClick={handleLabelDoubleClick}> {/* Checkbox label */}
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /> {/* Checkbox input */}
        <span className="checkmark"></span> {/* Checkbox custom styling */}
        {isEditing ? ( // If editing state is true, render the following input field
          <input
            type="text" 
            value={editValue} // Set the value of the input field to the editValue state
            onChange={handleInputChange} // Call the handleInputChange function when the input value changes
            onBlur={handleInputBlur} // Call the handleInputBlur function when the input field loses focus
            onKeyDown={handleInputKeyDown} // press enter key to finish editing
            autoFocus // Autofocus on the input field
          />
        ) : ( 
          item.description // if it is not editing keep text fetched from backend
        )}
      </label>
      <div className='delete'> 
        <UIButton text="X" width='30px' height='25px' backgroundColor='' func={() => del(item.id)} /> 
      </div>
    </div>
  );
};

export default Item; // Export the Item component as the default export