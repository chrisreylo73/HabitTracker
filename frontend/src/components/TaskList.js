import Footer from "./Footer";
import Header from "./Header";
import Item from "./Item";

const TaskList = ({ listItems, add, update, del }) => {
  return (
    <div className='taskList'>
      {/* Render the Header component with the text 'Task List' */}
      <Header text='Task List'></Header>

      {/* Iterate over the listItems array and render the Item component for each item (display items from database) */}
      {listItems.map((item) => (
        <Item
          key={item.id}
          item={item} 
          del={del} 
          update={update} 
        />
      ))}

      {/* Render the Footer component with the add function as a prop */}
      <Footer add={add} />
    </div>
  );
}

export default TaskList;