import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    "Brand Management",
    "Digital Marketing",
    "Corporate Videos"
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="experience-wrapper">
          <div className="experience-content">
            <div className="badge">
              <span className="badge-dot"></span>
              <span>Our Experience</span>
            </div>
            <h2 className="experience-title">
              Delivering <span className="text-gradient">Consistent Value</span>
            </h2>
            <p className="experience-description">
              Over the years, we've worked with clients across industries, government projects, and NGOs. The common thread? They value our ability to simplify problems, deliver consistently, and build long term partnerships. Most importantly, our clients are happy working with us and that's what keeps us going.
            </p>
            
            <div className="experience-tags">
              {experiences.map((exp, index) => (
                <div className="exp-tag" key={index}>
                  <CheckCircle size={18} className="exp-icon" />
                  <span>{exp}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="experience-visual">
            <div className="glass-panel stat-card">
              <Award size={48} className="stat-icon" />
              <h3 className="stat-number">15+</h3>
              <p className="stat-text">Years Combined Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
