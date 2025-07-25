// Your new App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Search from './components/Search/Search';
import Explore from './components/Explore/Explore';
import './App.css'; // This now holds your global styles

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Search />
      <Explore />
    </div>
  );
}

export default App;