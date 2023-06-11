import React from 'react';
import "./Navbar.css"
import logo from "./logo.png"

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">
        <img src={logo} alt="Logo"/>
      </a>
      <ul className="navbar-links">
        <li>
          <a href="/">Shop</a>
        </li>
        <li>
          <a href="/about">New Arrivals</a>
        </li>
        <li>
          <a href="/services">Best Sellers</a>
        </li>
        <li>
          <a href="/contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
