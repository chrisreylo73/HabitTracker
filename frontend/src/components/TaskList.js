import Footer from "./Footer";
import Header from "./Header";
import Item from "./Item";
import React, { useState } from 'react';


const TaskList = ({events}) => {
  return (
    <div className='taskList'>
      <Header text ='Task List'></Header>
        {events.map((event) => (
          <Item text={event.description} key={event.id}/>
        ))}
      <div className="footerCont">
        <Footer />
      </div>
    </div>
  )
}

export default TaskList
