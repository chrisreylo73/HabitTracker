// Define a functional component called Header
const Header = ({ text }) => {
  // Render the header element
  return (
    <div className="header">
      <p>{text}</p> {/* Display the text prop */}
    </div>
  );
}

export default Header; // Export the Header component as the default export
