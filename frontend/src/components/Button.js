import React from 'react'

const Button = ({text}) => {
  const style = {
    margin: "5px",
    borderRadius: "18px",
    height: "60px",
    width: "60px",
    border: "none",
    backgroundColor: "#2a2d2e",
    transition: "background-color 0.3s ease",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.9)",
    color: "white",
    ":hover": {
      backgroundColor: "#085d9b",
    },
    "click": {
      backgroundColor: "#085d9b",
    }
  };
  return (
    <div>
      <button style={style}>{text}</button>
    </div>
  )
}

export default Button
