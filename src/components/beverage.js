import React from 'react';
import '../css/Beverage.css';
import { Link } from "react-router-dom";

const categories = [
  {
    name: 'Beverages',
    items: [
      { name: 'Soft drinks', price: '$2' },
      { name: 'Iced tea', price: '$3' },
      { name: 'Lemonade', price: '$3' },
      { name: 'Coffee', price: '$4' },
      { name: 'Mocktails', price: '$6' },
      

    ]
  }
];

const Beverage = () => {
  return (
    <div className='beverage'>
      {categories.map(category => (
        <div key={category.name}>
          <h2>{category.name}</h2>
          <>
            {category.items.map(item => (
              <h4 key={item.name}>
                {item.name} - {item.price}
              </h4>
            ))}
          </>
        </div>
      ))}
      <div>
      <button className="button-33">
        <Link to="/">Go back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Beverage;
