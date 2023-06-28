import Footer from "./Footer"
import Header from "./Header"

import React, { useState } from 'react';

const TaskList = ({events}) => {
  

  return (
    <div className='taskList'>
      <Header text ='Todays Task List'></Header>
      <ul className="listItems">
        {events.map((event) => (
          <li>
            <input type='checkbox'/>
            <label>{event.description}</label>
          </li>
        ))}
      </ul>
      <div className="footerCont">
        <Footer />
      </div>
    </div>
  )
}

export default TaskList
