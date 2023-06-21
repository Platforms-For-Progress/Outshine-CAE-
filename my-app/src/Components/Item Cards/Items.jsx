import React, { useState } from 'react';
import itemsData from './items.json';
import './items.css'; // Import the CSS file for styling
import logo from './logo.png';

function ItemList() {
  const [sortedItems, setSortedItems] = useState([...itemsData]);

  const sortByPrice = () => {
    const sorted = [...sortedItems].sort((a, b) => a.price - b.price);
    setSortedItems(sorted);
  };

  const sortByType = () => {
    const sorted = [...sortedItems].sort((a, b) => a.type.localeCompare(b.type));
    setSortedItems(sorted);
  };

  return (
    <div>
      <div className='filters'>
        <button onClick={sortByPrice}>Price</button>
        <button onClick={sortByType}>Type</button>
        <button>New Arrivals</button>
      </div>
      <div className="card-container">
        {sortedItems.map((item) => (
          <div key={item.id} className="card">
            <img src={logo} alt={item.title} />
            <h3>{item.title}</h3>
            <p>Price: {item.price}</p>
            <p className='typetag'>{item.type}</p>
            <p className='brandtag'>{item.brand}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
