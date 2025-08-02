// src/components/Search/Search.js
import React from 'react';
import './Search.css'; // We will replace the CSS content as well

// --- IMPORTANT: UPDATE IMAGE PATHS HERE ---
// You need to gather these images and place them in your assets folder.

const makesData = [
  { id: 1, name: 'Audi', count: 12, logo: '/src/assets/logos/audi.png' },
  { id: 2, name: 'BMW', count: 9, logo: '/src/assets/logos/bmw.png' },
  { id: 3, name: 'Ford', count: 9, logo: '/src/assets/logos/ford.png' },
  { id: 4, name: 'Honda', count: 20, logo: '/src/assets/logos/honda.png' },
  { id: 5, name: 'Hyundai', count: 1, logo: '/src/assets/logos/hyundai.png' },
  { id: 6, name: 'Isuzu', count: 3, logo: '/src/assets/logos/isuzu.png' },
  { id: 7, name: 'Jaguar', count: 2, logo: '/src/assets/logos/jaguar.png' },
  { id: 8, name: 'Jeep', count: 5, logo: '/src/assets/logos/jeep.png' },
];

const bodyTypesData = [
  { id: 1, name: 'Convertible', count: 1, image: '/src/assets/body-types/convertible.png' },
  { id: 2, name: 'Hatchback', count: 50, image: '/src/assets/body-types/hatchback.png' },
  { id: 3, name: 'Heavy Equipment', count: 2, image: '/src/assets/body-types/heavy-equipment.png' },
  { id: 4, name: 'Pickups', count: 21, image: '/src/assets/body-types/pickup.png' },
  { id: 5, name: 'Sedan', count: 49, image: '/src/assets/body-types/sedan.png' },
  { id: 6, name: 'SUV', count: 112, image: '/src/assets/body-types/suv.png' },
  { id: 7, name: 'Trucks', count: 3, image: '/src/assets/body-types/truck.png' },
  { id: 8, name: 'Vans', count: 6, image: '/src/assets/body-types/van.png' },
];


const Search = () => {
  return (
    <section id="search" className="browse-section">
      <div className="container">
        <div className="browse-wrapper">
          {/* Column 1: Browse by Make */}
          <div className="browse-column">
            <div className="browse-header">
              <h2>Browse by <strong>Make</strong></h2>
              <a href="/all-makes" className="show-all-link">Show All Makes</a>
            </div>
            <div className="browse-grid">
              {makesData.map(make => (
                <a href={`/cars/make/${make.name.toLowerCase()}`} key={make.id} className="browse-item-link">
                  <div className="browse-item">
                    <img src={make.logo} alt={`${make.name} logo`} />
                    <p>{make.name} ({make.count})</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Browse by Body */}
          <div className="browse-column">
            <div className="browse-header">
              <h2>Browse by <strong>Body</strong></h2>
              <a href="/all-body-types" className="show-all-link">Show all Types</a>
            </div>
            <div className="browse-grid">
              {bodyTypesData.map(body => (
                <a href={`/cars/body/${body.name.toLowerCase().replace(' ', '-')}`} key={body.id} className="browse-item-link">
                  <div className="browse-item">
                    <img src={body.image} alt={`${body.name}`} />
                    <p>{body.name} ({body.count})</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;