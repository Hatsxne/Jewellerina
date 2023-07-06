import React from "react";
import Card from "../Cards";
import "./Sale.css";

function Sale() {
  const cards = [
    {
      id: 1,
      image: "/Images/Bangle1.webp",
      name: "Product 1",
      metal: "Yellow Gold",
      secondPrice: "$19.99",
      price: "$17.99",
    },
    {
      id: 2,
      image: "/Images/Bangle2.webp",
      name: "Product 2",
      metal: "Yellow Gold",
      secondPrice: "$24.99",
      price: "$19.99",
    },
    {
      id: 3,
      image: "../../Images/Bangle3.webp",
      name: "Product 1",
      metal: "Yellow Gold",
      secondPrice: "$19.99",
      price: "$17.99",
    },
    {
      id: 4,
      image: "../../Images/Bangle3.webp",
      name: "Product 2",
      metal: "Yellow Gold",
      secondPrice: "$24.99",
      price: "$19.99",
    },
    {
      id: 5,
      image: "../../../Images/Bangle3.webp",
      name: "Product 1",
      metal: "Yellow Gold",
      secondPrice: "$19.99",
      price: "$17.99",
    },
    {
      id: 6,
      image: "../../../Images/Bangle3.webp",
      name: "Product 2",
      metal: "Yellow Gold",
      secondPrice: "$24.99",
      price: "$19.99",
    },
  ];

  return (
    <div className="card-container">
      <div className="row">
        {cards.slice(0, 3).map((card) => (
          <Card
            key={card.id}
            image={card.image}
            name={card.name}
            metal={card.metal}
            secondPrice={card.secondPrice}
            price={card.price}
          />
        ))}
      </div>
      <div className="card-row">
        {cards.slice(3, 6).map((card) => (
          <Card
            key={card.id}
            image={card.image}
            name={card.name}
            metal={card.metal}
            secondPrice={card.secondPrice}
            price={card.price}
          />
        ))}
      </div>
    </div>
  );
}
export default Sale;