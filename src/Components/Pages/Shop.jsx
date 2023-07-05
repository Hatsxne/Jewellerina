import React from 'react';
import Card from '../Cards';
import './Shop.css';

function Shop() {
  const cards = [
    {
      id: 1,
      image: '../../Images/Bangle1.webp',
      name: 'Product 1',
      metal: 'Yellow Gold',
      price: '$19.99',
    },
    {
      id: 2,
      image: '../../Images/Bangle2.webp',
      name: 'Product 2',
      metal: 'Yellow Gold',
      price: '$24.99',
    },
    {
      id: 3,
      image: '../../Images/Bangle3.webp',
      name: 'Product 1',
      metal: 'Yellow Gold',
      price: '$19.99',
    },
    {
      id: 4,
      image: '../../Images/Bangle3.webp',
      name: 'Product 2',
      metal: 'Yellow Gold',
      price: '$24.99',
    },
    {
      id: 5,
      image: '../../../Images/Bangle3.webp',
      name: 'Product 1',
      metal: 'Yellow Gold',
      price: '$19.99',
    },
    {
      id: 6,
      image: '../../../Images/Bangle3.webp',
      name: 'Product 2',
      metal: 'Yellow Gold',
      price: '$24.99',
    },
    // Add more card objects as needed
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
            price={card.price}
          />
        ))}
      </div>
      <div className="row">
        {cards.slice(3, 6).map((card) => (
          <Card
            key={card.id}
            image={card.image}
            name={card.name}
            metal={card.metal}
            price={card.price}
          />
        ))}
      </div>
    </div>
  );
}


export default Shop;