import Footer from "./Footer";
import Header from "./Header";
import Item from "./Item";

const TaskList = ({listItems, add, update, del}) => {
  return (
    <div className='taskList'>
      <Header text ='Task List'></Header>
        {listItems.map((item) => (
          <Item 
            key={item.id}
            item={item}
            del={del}
            update={update}
          />
        ))}
        <Footer add={add}/>
    </div>
  )
}

export default TaskList
