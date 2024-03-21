import React from 'react';
import { Card } from 'react-bootstrap';
import { BiRupee } from 'react-icons/bi';
import ItemsSlider from './components/itemslider';

const App = () => {
  const topDealsItems = [
    { title: 'Item 1', price: 10 },
    { title: 'Item 2', price: 20 },
    { title: 'Item 3', price: 30 },
    // Add more items as needed
  ];

  return (
    <ItemsSlider title="Top Deals">
      {topDealsItems.map((item, index) => (
        <span key={index}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                <span className='actual-price'><BiRupee size={20}/> {item.price}</span>
                <span className='mrp-price'>M.R.P. : <strike><BiRupee size={16} color={818181} />{item.price}</strike><span className='save-price

'>16% off</span></span>
                <span className='save-price'>Save<BiRupee size={16}/>{item.price}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </span>
      ))}
    </ItemsSlider>
  );
};

export default App;