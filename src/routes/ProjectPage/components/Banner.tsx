import React from 'react';
import './Banner.scss';

interface FullWidthImageProps {
  imageSrc: string;
  alt: string;
}

const Banner: React.FC<FullWidthImageProps> = ({ imageSrc, alt }) => {
  return (
    <div className="full-width-image-container">
      <img src={imageSrc} alt={alt} className="full-width-image" />
    </div>
  );
};

export default Banner;
