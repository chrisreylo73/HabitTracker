import React, { useState } from 'react';
import UIButton from "./UIButton";

const Item = ({ item, del, update }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item.description);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const style = {
    textDecoration: isChecked ? 'line-through' : 'none',
    userSelect: 'none', // Disable text selection
    cursor: 'default', // Remove cursor effects
  };

  const handleInputChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleLabelDoubleClick = () => {
    setIsEditing(true);
  };

  const handleInputBlur = () => {
    finishEditing();
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      finishEditing();
    }
  };

  const finishEditing = () => {
    setIsEditing(false);
    update(item.id, editValue);
  };

  return (
    <div className="item-container">
      <label className="checkbox-container" style={style} onDoubleClick={handleLabelDoubleClick}>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <span className="checkmark"></span>
        {isEditing ? (
          <input
            type="text"
            value={editValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
            autoFocus
          />
        ) : (
          item.description
        )}
      </label>
      <div className='delete'>
        <UIButton text="X" width='30px' height='25px' func={() => del(item.id)} />
      </div>
    </div>
  );
};

export default Item;
