import React from 'react';
import './Partners.css';

const Partners = () => {
  // Using text placeholders styled like sleek logos since we don't have the assets
  const partners = [
    "Gemini", "HDFC", "Saaras", "SIDBI", 
    "Vynlet", "Tantashala", "Goodlife", "YELO", 
    "Pratyaksh", "Newton Edwise"
  ];

  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-header">
          <h2 className="partners-title">
            Our Trusted <span className="text-gradient">Partners</span>
          </h2>
        </div>
      </div>
      
      <div className="marquee-container">
        <div className="marquee-track">
          {/* Double the list for infinite scroll effect */}
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="partner-logo">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
