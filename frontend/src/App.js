// React Hooks
import {useEffect, useState} from 'react';
// Axios for making HTTP requests
import axios from "axios";
// Function for time from date-fns library
import {format} from "date-fns"
// Styling
import './App.css';



const baseUrl = "http://localhost:5000"

function App() {

  const fetchEvents = async () =>{
    const data = await axios.get(`${baseUrl}/events`)
    console.log("DATA:", data);
  }
  const [description, setDescription] = useState("")

  // Event handler function to update value entered in the inout field
  const handleChange = e => {
    setDescription(e.target.value);
  }
  // Event handler function triggered when form is submitted
  const handleSubmit = e => {
    // To stop page refresh 
    e.preventDefault();
    console.log(description);
  }

  useEffect(() =>{
    fetchEvents();
  }, [])

  
  return (
    <div className="App">
    <header className="App-header">
      <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description</label>
        <input onChange={handleChange} type="text" name="description" id="description" value={description} />
        <button type="submit">Submit</button>
      </form>
    </header>
  </div>
  );
}

export default App;
