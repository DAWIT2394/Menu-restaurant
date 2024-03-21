import React from "react";
import { Link } from "react-router-dom";
import '../css/food.css'

const Food = ({ item, price }) => {
  return (
    
    <div className="menu-item-card">
      <h3>{item}</h3>
      <p>Price: ${price}</p>
    </div>
  );
}

const MenuCategory = ({ title, items }) => {
  return (
    <div className={title.toLowerCase().replace(' ', '-')}>
      <h2>{title}</h2>
      {items.map((menuItem, index) => (
        <Food key={index} item={menuItem.item} price={menuItem.price} />
      ))}
    </div>
  );
}

const FoodMenu = () => {
  const menuItems = {
    "Appetizers": [
      { item: "Bruschetta", price: "8.99" },
      { item: "Calamari", price: "10.99" },
      { item: "Shrimp cocktail", price: "12.99" },
      { item: "Caprese salad", price: "9.99" },
      { item: "Mozzarella sticks", price: "7.99" }
    ],
    "Soups and Salads": [
      { item: "Caesar salad", price: "8.99" },
      { item: "French onion soup", price: "6.99" },
      { item: "Tomato soup", price: "5.99" },
      { item: "Cobb salad", price: "10.99" },
      { item: "Greek salad", price: "9.99" }
    ],
    "Main Courses - Meat":[
        {item:"Steak", price:"14.99"},
        {item:"Chicken parmesan", price:"12.99"},
        {items:"Roast beef", price:"19.99"},
        {item:"Pork chops", price:"10.99"},
        {item:"BBQ ribs", price:"16.99"}
    ]
    // Define other menu categories similarly...
  };

  return (
    <div className="menu">
      {Object.entries(menuItems).map(([category, items]) => (
        <MenuCategory key={category} title={category} items={items} />
      ))}
       <button className="button-33">
        <Link to="/">Go back to Home</Link>
        </button> 
    </div>
  );
};

export default FoodMenu;
