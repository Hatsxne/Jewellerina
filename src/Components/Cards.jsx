import React from 'react';
import './Cards.css';

function Cards({ image, name, metal, price }) {
  return (
    <div className="card">
      <img src={image} alt="Product" className="card-image" />
      <div className="card-details">
        <h2 className="card-name">{name}</h2>
        <h4 className="metal-type">{metal}</h4>
        <p className="card-price">{price}</p>
      </div>
    </div>
    
  );
}

export default Cards;