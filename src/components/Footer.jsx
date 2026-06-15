import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ onOpenModal }) => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <div className="footer-brand-wrapper">
              <img src="https://undergradsmedia.com/media/logos/UG.png" alt="UnderGrads Media" className="footer-logo" />
              <h3 className="footer-company-name">UnderGrads Media</h3>
            </div>
            <p className="footer-tagline">Scale Your Business with Digital Presence.</p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedinIn size={18} /></a>
              <a href="#" className="social-icon" aria-label="Facebook" target="_blank" rel="noreferrer"><FaFacebookF size={18} /></a>
              <a href="#" className="social-icon" aria-label="Instagram" target="_blank" rel="noreferrer"><FaInstagram size={18} /></a>
              <a href="#" className="social-icon" aria-label="YouTube" target="_blank" rel="noreferrer"><FaYoutube size={18} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#experience">About us</a></li>
              <li><button onClick={onOpenModal} className="link-btn">Contact us</button></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h5>Other Platforms</h5>
            <ul className="footer-links">
              <li><a href="https://www.freelancer.in/u/undergradsmedia" target="_blank" rel="noreferrer">Freelancer</a></li>
              <li><a href="https://www.upwork.com/freelancers/~01d27f9dcfe8331bc2" target="_blank" rel="noreferrer">Upwork</a></li>
              <li><a href="https://www.behance.net/undergradsmedia" target="_blank" rel="noreferrer">Behance</a></li>
              <li><a href="https://www.workana.com/freelancer/5efaf0204d2105579f134891a5f00094" target="_blank" rel="noreferrer">Workana</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h5>Connect with us</h5>
            <div className="contact-info">
              <p>Tel: +91 7008932329</p>
              <p>Email: Mail@undergradsmedia.com</p>
            </div>
            <button className="glow-btn footer-contact-btn" onClick={onOpenModal}>
              Contact
            </button>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-border"></div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} UnderGrads Media. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
