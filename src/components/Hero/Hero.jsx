// src/components/Hero/Hero.js
import React from 'react';
import './Hero.css';
import heroBg from '../../assets/hero-background.jpg'; // The red Ferrari

const Hero = () => {
  return (
    <div id="home" className="hero-container" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1>
          Get your dream
          <br />
          Car
        </h1>
        <p>
          Explore our curated collection of the world's most prestigious
          vehicles. Your next journey begins here.
        </p>
        <button className="hero-btn">GET STARTED</button>
      </div>
    </div>
  );
};

export default Hero;