import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "Transforming Saraas Group into a Modern Brand",
      description: "Saraas Group, a well known poultry business in Odisha with 15+ years of experience, wanted to go beyond being just a family run farm. They aimed to build a modern brand identity.",
      category: "Branding & Strategy"
    },
    {
      title: "Building YELO Into a Modern Coworking & Community Brand",
      description: "YELO is a bike service app in Bhubaneswar, Odisha, offering doorstep two wheeler repair and maintenance. Customers can book services, track repairs, and pay online.",
      category: "Digital Product"
    },
    {
      title: "Elevating Tantashala From Local Handloom Store to a Digital First Fashion Brand",
      description: "Tantashala is a celebration of India's timeless handloom heritage. The brand specializes in handwoven Sambalpuri sarees, kurtas, and dresses.",
      category: "E-Commerce & Marketing"
    },
    {
      title: "UnderGrads x Government Initiatives",
      description: "We partner with government bodies, PSUs, and national initiatives to bridge the gap between policy and people, transforming reports into powerful narratives.",
      category: "Public Sector"
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <span className="badge-dot"></span>
            <span>Our Work</span>
          </div>
          <h2 className="section-title">
            Case <span className="text-gradient">Studies</span>
          </h2>
          <p className="section-subtitle">
            Explore how we've helped brands scale, rebrand, and build meaningful digital presences.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="portfolio-card" key={index}>
              <div className="card-image-placeholder">
                <div className="category-tag">{project.category}</div>
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                <a href="#" className="case-study-btn">
                  See case study <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
