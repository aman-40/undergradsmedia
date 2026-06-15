import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app-container">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <main className="main-content">
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <Partners />
        <Services onOpenModal={() => setIsModalOpen(true)} />
        <Portfolio />
        <Experience />
        <Footer onOpenModal={() => setIsModalOpen(true)} />
      </main>
      <div className="ambient-background"></div>
      
      {/* Decorative vertical grid lines */}
      <div className="grid-lines">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
