import React from 'react';
import './AboutMyRole.scss';

const AboutMyRoleSection = ({ aboutContent, roleItems, isRTL = false }) => {
  return (
    <div className="about-section-container">
      {/* Left side - About */}
      <div className={`about-section-about ${isRTL ? 'rtl' : 'ltr'}`}>
        <h2>{aboutContent.title}</h2>
        <p>{aboutContent.description}</p>
      </div>

      {/* Right side - My Role */}
      <div className={`about-section-role ${isRTL ? 'rtl' : 'ltr'}`}>
        <h2>{roleItems.title}</h2>
        {roleItems.cards.map((card, index) => (
          <div className="about-role-card" key={index}>
            <img src={card.icon} alt={card.alt} />
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMyRoleSection;
