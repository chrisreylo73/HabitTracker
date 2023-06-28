import React from 'react'
import UIButton from "./UIButton"
const UIInput = () => {
  return (
    <div className='ui-input'>
      <input type='text'></input>
      <UIButton text="Add" width='47px' height='25px'/>
    </div>
  )
}

export default UIInput