import React from 'react';
import './DetailProject.scss';
// Detail Project Component
const DetailProject = ({ title, description, imageSrc, imageAlt, imageRight }) => (
    <div className={`detail-section ${imageRight ? 'detail-right' : 'detail-left'}`}>
      <div className="detail-content">
        <h2 className="detail-title">{title}</h2>
        <p className="detail-description">{description}</p>
      </div>
      <div className="detail-image-container">
        <img className="detail-image" src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
  
  export default DetailProject;
