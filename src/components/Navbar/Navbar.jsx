// src/components/Navbar/Navbar.js
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './Navbar.css';
import logo from '../../assets/AUTOKINGLOGO1.png';

const Navbar = () => {
  // State to track if dark mode is active. false means light mode is the default.
  const [isDarkMode, setIsDarkMode] = useState(false);

  // This `useEffect` hook runs whenever the `isDarkMode` state changes.
  // It adds or removes the 'dark-mode' class from the <body> tag of your website.
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]); // The dependency array ensures this runs only when isDarkMode changes

  // Function to handle the toggle click
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode); // Toggles the state between true and false
  };

  return (
    <header className="navbar-header">
      <nav className="navbar container">
        <div className="navbar-logo">
          <img src={logo} alt="AutoKing Logo" />
          {/* Changed h1 to include a span for separate styling */}
          <h1>
            AUTO<span className="logo-king">KING</span>
          </h1>
        </div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#explore">Explore</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div className="navbar-toggle">
          <label className="switch">
            {/* The input is now controlled by React state */}
            <input 
              type="checkbox" 
              checked={isDarkMode}
              onChange={handleToggle} 
            />
            <span className="slider round"></span>
          </label>
        </div>
      </nav>
    </header>
  );
};

 export default Navbar;