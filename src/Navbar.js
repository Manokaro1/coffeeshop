import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">CoffeeShop</div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="hamburger" onClick={handleMenuToggle}>
        <div className={`line ${menuOpen ? 'rotate1' : ''}`}></div>
        <div className={`line ${menuOpen ? 'rotate2' : ''}`}></div>
        <div className={`line ${menuOpen ? 'rotate3' : ''}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
