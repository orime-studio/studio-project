import React from 'react';
import './DesignSystem.scss';

// קומפוננטת DesignSystem
const DesignSystem = ({ title, description, leftImages, rightImage }) => (
  <div className="design-system-section">
    <h2 className="design-system-title">{title}</h2>
    <p className="design-system-description">{description}</p>
    <div className="design-images-wrapper">
      <div className="design-left-images">
        {leftImages.map((img, index) => (
          <img 
            key={index} 
            className={`design-image design-left-image ${index === 0 ? 'top' : 'bottom'}`} 
            src={img.src} 
            alt={img.alt} 
          />
        ))}
      </div>
      <div className="design-right-image-wrapper">
        <img 
          className="design-image design-right-image" 
          src={rightImage.src} 
          alt={rightImage.alt} 
        />
      </div>
    </div>
  </div>
);

export default DesignSystem;
