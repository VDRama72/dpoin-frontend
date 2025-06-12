// File: src/pages/Landing.jsx
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Landing = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Landing;