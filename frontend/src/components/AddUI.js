import UIInput from "./UIInput"
import UIButton from "./UIButton"
const AddUI = ({events}) => {
  return (
    <div className="addUI">
      <div className='ui-input'>
        <input type='text'></input>
        <UIButton text="Add" width='47px' height='25px' />
      </div>
    </div>
  )
}

export default AddUI
