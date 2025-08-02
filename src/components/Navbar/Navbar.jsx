// src/components/Navbar/Navbar.js
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './Navbar.css';
import logo from '../../assets/AUTOKINGLOGO1.png';

const Navbar = () => {
  // State to track if dark mode is active. false means light mode is the default.
  const [isDarkMode, setIsDarkMode] = useState(false);
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Function to handle mobile menu toggle
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
        
        {/* Mobile menu button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={handleMobileMenuToggle}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#explore" onClick={() => setIsMobileMenuOpen(false)}>Explore</a></li>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
          <li><a href="#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a></li>
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