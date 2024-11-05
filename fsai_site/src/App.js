// src/App.js
import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import InfoSection from './components/InfoSection';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <InfoSection />
    </div>
  );
}

export default App;
