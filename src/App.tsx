import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="navbar">
      <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      </Routes>
     
    </div>
  );
}

export default App;
