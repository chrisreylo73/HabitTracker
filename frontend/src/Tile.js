import React from 'react';

const Tile = ({ title, description, backgroundColor }) => {
  const tileStyle = {
    backgroundColor: backgroundColor,
    padding: '20px',
    borderRadius: '8px',
    color: '#FFFFFF',
  };

  return (
    <div style={tileStyle}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Tile;