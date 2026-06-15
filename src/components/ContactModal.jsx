import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  if (!isOpen) return null;

  const servicesList = [
    "Business Consultancy", "Video & Music Production", "Website Development",
    "UI/UX & Graphics Design", "Social Media Management", "Content Marketing",
    "Influencer Marketing", "Digital Marketing", "Marketing Strategy",
    "Performance Marketing", "Others"
  ];

  const handleServiceToggle = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Request Service</h3>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {isSubmitted ? (
          <div className="success-state">
            <div className="success-icon-wrapper">
              <Check size={40} className="success-icon" />
            </div>
            <h4>Request Sent Successfully!</h4>
            <p>We'll be in touch with you shortly.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Your Name *" required className="form-input" />
            </div>
            
            <div className="form-group">
              <input type="email" placeholder="Your Email *" required className="form-input" />
            </div>

            <div className="form-group phone-group">
              <select className="form-select" required defaultValue="+91">
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+61">🇦🇺 +61</option>
                <option value="+971">🇦🇪 +971</option>
              </select>
              <input type="tel" placeholder="WhatsApp Number *" required className="form-input" />
            </div>

            <div className="form-group">
              <p className="field-label">Select Services</p>
              <div className="services-checkboxes">
                {servicesList.map(service => (
                  <label key={service} className="checkbox-label">
                    <input 
                      type="checkbox" 
                      checked={selectedServices.includes(service)}
                      onChange={() => handleServiceToggle(service)}
                    />
                    <span className="checkbox-text">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <textarea placeholder="Additional Requirements" rows="4" className="form-input" maxLength={500}></textarea>
            </div>

            <button type="submit" className="glow-btn submit-btn">
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
