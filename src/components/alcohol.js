
import { Link } from "react-router-dom";
import React from 'react';
import '../css/alcohol.css';

const categories = [
  {
    name: 'Beer',
    items: [
      { name: 'Lager', price: '$5' },
      { name: 'IPA', price: '$6' },
      { name: 'Stout', price: '$7' },
      { name: 'Pilsner', price: '$5' },
      { name: 'Wheat Beer', price: '$6' }
    ]
  },
  {
    name: 'Wine',
    items: [
      { name: 'Red Wine', price: '$8' },
      { name: 'White Wine', price: '$8' },
      { name: 'Rosé Wine', price: '$7' }
    ]
  },
  {
    name: 'Spirits',
    items: [
      { name: 'Vodka', price: '$5' },
      { name: 'Whiskey', price: '$7' },
      { name: 'Rum', price: '$6' },
      { name: 'Tequila', price: '$6' },
      { name: 'Gin', price: '$6' }
    ]
  },
  {
    name: 'Cocktails',
    items: [
      { name: 'Martini', price: '$8' },
      { name: 'Margarita', price: '$7' },
      { name: 'Mojito', price: '$7' },
      { name: 'Old Fashioned', price: '$9' },
      { name: 'Cosmopolitan', price: '$8' }
    ]
  },
 
];

const Alcohol = () => {
  return (
    <div className="ab">
        <h1>Alcoholic</h1>
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
       <button className="button-33">
        <Link to="/">Go back to Home</Link>
        </button> 
    </div>
  );
};

export default Alcohol;
