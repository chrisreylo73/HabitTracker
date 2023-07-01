import React, { useState } from 'react';

const Item = ({text}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const style = {
   textDecoration: isChecked ? "line-through" : "none"
  }

  return (
   <div className="item-container">
   <label className="checkbox-container" style={style}>
     <input
       type="checkbox"
       checked={isChecked}
       onChange={handleCheckboxChange}
     />
     <span className="checkmark"></span>
     {text}
   </label>
 </div>
  );
};

export default Item;


