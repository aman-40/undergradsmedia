import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      setScrollProgress(scroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`top-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="scroll-progress-bar" style={{ transform: `scaleX(${scrollProgress})` }}></div>
      <div className="container nav-container">
        <a href="#home" className="logo-link">
          <img src="https://undergradsmedia.com/media/logos/UG.png" alt="UnderGrads Media" className="nav-logo" />
        </a>

        {/* Mobile menu toggle */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <div className={`nav-menu-wrapper ${isOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Work</a></li>
            <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
          </ul>

          <div className="nav-actions">
            <a href="https://wa.me/919337061270" className="whatsapp-cta" target="_blank" rel="noopener noreferrer">
              <div className="cta-icon-wrapper">
                <MessageCircle size={20} className="cta-icon" />
              </div>
              <span className="cta-text">Chat with us</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
