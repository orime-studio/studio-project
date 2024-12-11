import React from 'react';
import './EnhancedDetailProject.scss';

// Enhanced Detail Project Component
const EnhancedDetailProject = ({ 
  title, 
  description, 
  mainImageSrc, 
  mainImageAlt, 
  shortImageSrc, 
  shortImageAlt, 
  imageRight 
}) => (
  <div className={`enhanced-detail-section ${imageRight ? 'enhanced-detail-right' : 'enhanced-detail-left'}`}>
    <div className="enhanced-detail-content">
      {shortImageSrc && (
        <div className="enhanced-short-image-container">
          <img className="enhanced-short-image" src={shortImageSrc} alt={shortImageAlt} />
        </div>
      )}
      <h2 className="enhanced-detail-title">{title}</h2>
      <p className="enhanced-detail-description">{description}</p>
    </div>
    <div className="enhanced-detail-image-container">
      <img className="enhanced-detail-image" src={mainImageSrc} alt={mainImageAlt} />
    </div>
  </div>
);

export default EnhancedDetailProject;
