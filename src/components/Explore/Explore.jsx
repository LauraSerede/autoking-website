// src/components/Explore/Explore.js
import React from 'react';
import './Explore.css';
import bmw from '../../assets/mistubishi rvr.jpeg';
import mercedes from '../../assets/Nissan.jpeg';

const vehicles = [
  {
    image: bmw,
    name: '2020 BMW 520D LUXURY LINE',
    details: 'Year - 2020 | KMS - 25800 | Fuel Type - Petrol'
  },
  {
    image: mercedes,
    name: '2021 MERCEDES BENZ C-CLASS',
    details: 'Year - 2021 | KMS - 15000 | Fuel Type - Petrol'
  },
  {
    image: bmw,
    name: '2022 AUDI A6',
    details: 'Year - 2022 | KMS - 5000 | Fuel Type - Diesel'
  },
  // Add more car objects here
];

const CarCard = ({ car }) => (
  <div className="car-card">
    <img src={car.image} alt={car.name} />
    <div className="car-card-info">
      <h3>{car.name}</h3>
      <p>{car.details}</p>
    </div>
  </div>
);

const Explore = () => {
  return (
    <section id="explore" className="explore-section">
      <div className="container">
        <h2>Explore Vehicles</h2>
        <div className="car-carousel">
          {/* In a real app, you'd use a library like react-slick or swiper.js for the carousel */}
          <button className="carousel-arrow left"></button>
          <div className="car-cards-container">
            {vehicles.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>
          <button className="carousel-arrow right"></button>
        </div>
      </div>
    </section>
  );
};

export default Explore;