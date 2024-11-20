import React from 'react';
import './ProjectBanner.scss';

// Project Banner Component
const ProjectBanner = ({ onClose, logoSrc, logoAlt, title, description }) => (
  <div className="project-banner">
    <button className="close-button" onClick={onClose}>
      <img src="public/img/Back icon.svg" alt="Close" />
    </button>
    <div className="logo">
      <img src={logoSrc} alt={logoAlt} />
    </div>
    <div className="banner-content">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  </div>
);

export default ProjectBanner;