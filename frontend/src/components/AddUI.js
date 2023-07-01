import UIButton from "./UIButton"
import  {useState} from 'react';
const AddUI = ({add}) => {

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
    <div className="addUI">
      <div className='ui-input'>
        <input 
          type='text' 
          placeholder="Title"
          onChange={handleInputChange}
        />
        <UIButton text="Add" width='47px' height='25px' func={handleSubmit} />
      </div>
    </div>
  )
}

export default AddUI
