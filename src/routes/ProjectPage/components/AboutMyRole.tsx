import React from 'react';
import './AboutMyRole.scss';

// About and My Role Section Component
const AboutMyRoleSection = ({ aboutContent, roleItems }) => {
  return (
    <div className="section-container">
      {/* Left side - About */}
      <div className="section-about">
        <h2>{aboutContent.title}</h2>
        <p>{aboutContent.description}</p>
      </div>

      {/* Right side - My Role */}
      <div className="section-role">
        <h2>{roleItems.title}</h2>
        {roleItems.cards.map((card, index) => (
          <div className="role-card" key={index}>
            <img src={card.icon} alt={card.alt} />
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMyRoleSection;