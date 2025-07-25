// src/components/Search/Search.js
import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  const [activeTab, setActiveTab] = useState('name');
  const [searchValue, setSearchValue] = useState('demio');

  return (
    <section id="explore" className="search-section">
      <div className="container">
        <div className="search-tabs">
          <button className={activeTab === 'name' ? 'active' : ''} onClick={() => setActiveTab('name')}>Search by Name</button>
          <button className={activeTab === 'brand' ? 'active' : ''} onClick={() => setActiveTab('brand')}>Filter by Brand</button>
          <button className={activeTab === 'body' ? 'active' : ''} onClick={() => setActiveTab('body')}>Filter by Body Type</button>
          <button className={activeTab === 'budget' ? 'active' : ''} onClick={() => setActiveTab('budget')}>Filter by Budget</button>
        </div>

        <div className="search-content">
          {activeTab === 'name' && (
            <div className="search-panel">
              <h2>Search vehicle</h2>
              <p>Simply write the vehicle name and press the search button (i.e demio or vitz)</p>
              <div className="search-input-wrapper">
                <i className="fas fa-search"></i> {/* You need Font Awesome for this */}
                <input 
                  type="text" 
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search by name..." 
                />
                {searchValue && <button className="clear-btn" onClick={() => setSearchValue('')}>×</button>}
              </div>
            </div>
          )}
          {/* You can add other panels here for brand, body type, etc. */}
        </div>
      </div>
    </section>
  );
};

export default Search;