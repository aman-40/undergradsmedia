import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = ({ onOpenModal }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow-container">
        <div className="sun-core"></div>
        <div className="sun-glow-primary"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">
            <span className="badge-dot"></span>
            <span>The UnderGrads Consulting</span>
          </div>
          
          <h1 className="main-heading">
            Your One Stop Solution for <br/>
            <span className="text-gradient">Business Consulting & Execution.</span>
          </h1>
          
          <p className="hero-subtitle">
            From planning to implementation in media, design, HR, marketing and tech. 
            We simplify challenges with creativity, communication and confidence.
          </p>
          
          <div className="hero-actions">
            <button className="glow-btn" onClick={onOpenModal}>
              Let's Build
              <ArrowRight size={18} />
            </button>
            <a href="#services" className="secondary-btn">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
