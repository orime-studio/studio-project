import React from 'react';
import './Research.scss';

// TheResearch Component
const TheResearch = ({ title, description, image1, image2, className }) => (
 
  <div className={`res-image-text-section ${className}`}>
    <h2 className="res-section-title">{title}</h2>
    <p className="res-section-description">{description}</p>
    <div className="res-images-container">
      <img className="res-image res-image1" src={image1.src} alt={image1.alt} />
      <img className="res-image res-image2" src={image2.src} alt={image2.alt} />
    </div>
  </div>
);

export default TheResearch;
