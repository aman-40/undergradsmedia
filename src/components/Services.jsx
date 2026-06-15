import React from 'react';
import { Camera, Image, Smartphone, Video, Code, Palette, ArrowRight } from 'lucide-react';
import './Services.css';

const Services = ({ onOpenModal }) => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <span className="badge-dot"></span>
            <span>What We Do</span>
          </div>
          <h2 className="section-title">
            Design & <span className="text-gradient">Media Production</span>
          </h2>
          <p className="section-subtitle">
            Creative visuals that build trust and connect with your customers. 
            Photos and videos are today's strongest tools to connect with your audience.
          </p>
        </div>

        <div className="services-bento">
          {/* Main featured service */}
          <div className="bento-card featured">
            <div className="card-content">
              <div className="icon-wrapper">
                <Smartphone size={32} className="accent-icon" />
              </div>
              <h3>Social Media Management</h3>
              <p>We create engaging content and manage your presence across platforms to build a loyal community around your brand.</p>
              
              <button className="service-link" onClick={onOpenModal} style={{background: 'none', border: 'none', padding: 0, cursor: 'pointer'}}>
                I need this <ArrowRight size={16} />
              </button>
            </div>
            <div className="card-bg-glow"></div>
          </div>

          <div className="bento-card">
            <div className="card-content">
              <div className="icon-wrapper">
                <Palette size={28} />
              </div>
              <h3>Logo & Branding</h3>
              <p>Crafting unique identities that stand out.</p>
            </div>
          </div>

          <div className="bento-card">
            <div className="card-content">
              <div className="icon-wrapper">
                <Camera size={28} />
              </div>
              <h3>Product Photoshoot</h3>
              <p>High-quality visuals for your products.</p>
            </div>
          </div>

          <div className="bento-card wide">
            <div className="card-content horizontal-layout">
              <div className="card-text">
                <div className="icon-wrapper">
                  <Video size={28} />
                </div>
                <h3>Videography & Documentaries</h3>
                <p>Storytelling through cinematic video production.</p>
              </div>
              <button className="service-link circle-link" onClick={onOpenModal} style={{border: '1px solid rgba(255, 255, 255, 0.1)', cursor: 'pointer'}}>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
