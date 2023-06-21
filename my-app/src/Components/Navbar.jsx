import React from 'react';
import "./Navbar.css";
import logo from "./logo.png";

function Navbar() {
  return (
    <div>
      <div className='top'>
          <img src={logo} alt="Logo"/>
      </div>
      <nav className="navbar">
        <ul className="navbar__items">
          <li className="navbar__item"><a href="/item1">Home</a></li>
          <li className="navbar__item"><a href="/item2">Shop</a></li>
          <li className="navbar__item"><a href="/item3">New Arrivals</a></li>
          <li className="navbar__item"><a href="/item4">Contact Us</a></li>
          <li className="navbar__item"><a href="/item5">Our Reviews</a></li>
          <li className="navbar__item"><a href="/item6">FAQS</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
