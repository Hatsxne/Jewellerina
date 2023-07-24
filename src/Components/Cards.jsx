import React from "react";
import "./Cards.css";
import { useNavigate } from "react-router-dom";

function Cards({ image, name, metal, price, secondPrice, category, detailedDescription, description }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/description", { state: { image, name, metal, price, secondPrice, category, detailedDescription, description }});
    console.log("Card clicked!");
  };

  return (
    <a href="#" onClick={handleClick} className="card-link">
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
    </a>
  );
}

export default Cards;
