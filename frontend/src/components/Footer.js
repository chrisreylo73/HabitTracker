import ActionButton from "./ActionButton";
import React, { useState } from "react";

// Define a functional component called Footer that accepts the 'add' prop
const Footer = ({ add }) => {
	// Declare a state variable 'newItem' and its setter function 'setNewItem'
	const [newItem, setNewItem] = useState("");

	// Event handler for input change
	const handleInputChange = (e) => {
		setNewItem(e.target.value);
	};

	// Event handler for form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (newItem.trim() !== "") {
			add(newItem);
			setNewItem("");
		}
	};

	// Render the Footer component
	return (
		<div className="footer">
			<ActionButton text="+" onClick={handleSubmit}></ActionButton>
			<div className="textInput">
				<input
					type="text"
					placeholder="  Add a new task here..."
					value={newItem} // Bind the input value to 'newItem' state
					onChange={handleInputChange} // Attach the 'handleInputChange' event handler to input's onChange event
				/>
			</div>
		</div>
	);
};

export default Footer;
