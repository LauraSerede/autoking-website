// src/components/Hero/Hero.js
import React from 'react';
import './Hero.css';
import heroBg from '../../assets/lamborghini.png';
// Import the new filter component
import HeroSearchFilter from './HeroSearchFilter';

const Hero = () => {
  return (
    <div id="home" className="hero-container" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content-wrapper container">
        <div className="hero-content">
          <h1>
            Get your dream
            <br />
            Car
          </h1>
          <p>
            Explore our curated collection of the world's most prestigious
            vehicles. Your next journey begins here.
          </p>
          <a href="#search" className="hero-btn">GET STARTED</a>
        </div>
        
        {/* Render the new filter component here */}
        <HeroSearchFilter />
      </div>
    </div>
  );
};

export default Hero;