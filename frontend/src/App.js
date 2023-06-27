// React Hooks
import {useEffect, useState} from 'react';
// Axios for making HTTP requests
import axios from "axios";
// Function for time from date-fns library
import {format} from "date-fns"
// Styling
import './App.css';
import SideBar from './components/SideBar';
import TaskList from './components/TaskList';
import Calender from './components/Calender';
import Streaks from './components/Streaks';
import Consistency from './components/Consistency';
import CompStatus from './components/CompStatus';
const baseUrl = "http://localhost:5000"

const App = () => {
  const [listItems, setListItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    fetchListItems();
  }, []);

  const fetchListItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/events'); // Replace with your backend route
      setListItems(response.data.events);
    } catch (error) {
      console.error(error);
    }
  };

  const addListItem = async () => {
    try {
      const response = await axios.post('http://localhost:5000/events', { description: newItem }); // Replace with your backend route and data structure
      setListItems([...listItems, response.data]);
      setNewItem('');
    } catch (error) {
      console.error(error);
    }
  };

  const deleteListItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/events/${id}`); // Replace with your backend route
      const updatedList = listItems.filter((item) => item.id !== id);
      setListItems(updatedList);
    } catch (error) {
      console.error(error);
    }
  };

  const updateListItem = async (id, updatedDescription) => {
    try {
      const response = await axios.put(`http://localhost:5000/events/${id}`, { description: updatedDescription }); // Replace with your backend route and data structure
      const updatedList = listItems.map((item) =>
        item.id === id ? response.data.event : item
      );
      setListItems(updatedList);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='App'>
      <div className='container'>
      <SideBar></SideBar>
      <TaskList></TaskList>
      <Calender></Calender>   
    </div>
    <div className='statsCon'>
          <Streaks></Streaks>
          <Consistency></Consistency>
          <CompStatus></CompStatus>
    </div> 
      
     
     
    </div>
    
  );
};

export default App;



// <div>
    //   <div className='calender'></div>
    //   <h1>List Interface</h1>
    //   <ul>
    //     {listItems.map((item) => (
    //       <li key={item.id}>
    //         {item.description}
    //         <button onClick={() => deleteListItem(item.id)}>Delete</button>
    //         <input
    //           type="text"
    //           value={item.description}
    //           onChange={(e) => updateListItem(item.id, e.target.value)}
    //         />
    //       </li>
    //     ))}
    //   </ul>
    //   <input
    //     type="text"
    //     value={newItem}
    //     onChange={(e) => setNewItem(e.target.value)}
    //   />
    //   <button onClick={addListItem}>Add Item</button>
    // </div>