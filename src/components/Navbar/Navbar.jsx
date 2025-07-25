// src/components/Navbar/Navbar.js
import React from 'react';
import './Navbar.css';
import logo from '../../assets/autoking-logo.png'; // Make sure you have a logo image here

const Navbar = () => {
  return (
    <header className="navbar-header">
      <nav className="navbar container">
        <div className="navbar-logo">
          <img src={logo} alt="AutoKing Logo" />
          <h1>AUTOKING</h1>
        </div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#explore">Explore</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div className="navbar-toggle">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;