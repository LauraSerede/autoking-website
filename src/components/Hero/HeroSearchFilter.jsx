// src/components/Hero/HeroSearchFilter.js
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './HeroSearchFilter.css';

const HeroSearchFilter = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All condition' },
    { id: 'new', label: 'New Cars' },
    { id: 'used', label: 'Used Cars' },
    { id: 'foreign', label: 'Foreign Used Cars' },
  ];

  return (
    <div className="hero-search-filter-container">
      <div className="filter-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="filter-inputs">
        <div className="input-group">
          <select defaultValue="">
            <option value="" disabled>Choose Make</option>
            <option value="toyota">Toyota</option>
            <option value="honda">Honda</option>
            <option value="bmw">BMW</option>
          </select>
        </div>
        <div className="input-group">
          <select defaultValue="">
            <option value="" disabled>Choose Model</option>
            <option value="corolla">Corolla</option>
            <option value="civic">Civic</option>
            <option value="x5">X5</option>
          </select>
        </div>
        <div className="input-group">
          <select defaultValue="">
            <option value="" disabled>Max Price</option>
            <option value="10000">$10,000</option>
            <option value="20000">$20,000</option>
            <option value="50000">$50,000</option>
          </select>
        </div>
        <div className="input-group">
          <select defaultValue="">
            <option value="" disabled>Choose Year</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <button className="search-button">
          <FaSearch />
          <span>0 CARS</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSearchFilter;