import React from "react";
import "./Cards.css";

function Cards({ image, name, metal, price, secondPrice, category }) {
  return (
    <div className="card">
      <img src={image} alt="Product" className="card-image" />
      <div className="card-details">
        <h2 className="card-name">{name}</h2>
        <h4 className="metal-type">{metal}</h4>
        <p className="card-second-price">{secondPrice}</p>
        <p className="card-price">{price}</p>
        <p className="category">{category}</p>
      </div>
    </div>
  );
}

export default Cards;