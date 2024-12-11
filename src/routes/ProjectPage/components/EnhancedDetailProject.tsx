import React from 'react';
import './EnhancedDetailProject.scss';

interface EnhancedDetailProjectProps {
  title: string;
  description: string;
  mainImageSrc: string;
  mainImageAlt: string;
  secondaryImageSrc: string;
  secondaryImageAlt: string;
  imageRight?: boolean;
}

const EnhancedDetailProject: React.FC<EnhancedDetailProjectProps> = ({
  title,
  description,
  mainImageSrc,
  mainImageAlt,
  secondaryImageSrc,
  secondaryImageAlt,
  imageRight = false,
}) => (
  <div className={`enhanced-detail-section ${imageRight ? 'enhanced-detail-right' : 'enhanced-detail-left'}`}>
    <div className="enhanced-detail-images">
      <img className="enhanced-detail-main-image" src={mainImageSrc} alt={mainImageAlt} />
      <img className="enhanced-detail-secondary-image" src={secondaryImageSrc} alt={secondaryImageAlt} />
    </div>
    <div className="enhanced-detail-content">
      <h2 className="enhanced-detail-title">{title}</h2>
      <p className="enhanced-detail-description">{description}</p>
    </div>
  </div>
);

export default EnhancedDetailProject;
