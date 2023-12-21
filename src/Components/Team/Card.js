// Card.js
import React from 'react';
import './Style.css'; // Import your CSS file

const Card = ({ image, name, sentence }) => {
  return (
    <div className="card outer">
      <div className="card-content">
        <span></span>
        <span></span>
        <img src={image} alt={name} />
      </div>
      <div className="outer-content">
        <h3>{name}</h3>
        <p>{sentence}</p>
      </div>
    </div>
  );
};

export default Card;
