import React from 'react';
import itemsData from './items.json';
import './items.css'; // Import the CSS file for styling
import logo from './logo.png';


function ItemList() {
    return (
      <div>
        <div className='filters'>
          <button>Price</button>
          <button>Type</button>
          <button>New Arrivals</button>
        </div>
        <div className="card-container">
          {itemsData.map((item) => (
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
