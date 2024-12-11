/* import React from 'react';
import './ProjectBanner.scss';

// Project Banner Component
const ProjectBanner = ({ onClose, logoSrc, logoAlt, title, description }) => (
  <div className="project-banner">
    <button className="close-button" onClick={onClose}>
      <img src="img/Back icon.svg" alt="Close" />
    </button>
    <div className="logo">
      <img src={logoSrc} alt={logoAlt} />
    </div>
    <div className="banner-content-project">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  </div>
);

export default ProjectBanner; */

// ProjectBanner.tsx
import React from 'react';
import './ProjectBanner.scss';

interface ProjectBannerProps {
  onClose: () => void;
  logoSrc: string;
  logoAlt: string;
  title: string;
  description: string;
  desktopBg: string;
  tabletBg: string;
  mobileBg: string;
}

const ProjectBanner: React.FC<ProjectBannerProps> = ({
  onClose,
  logoSrc,
  logoAlt,
  title,
  description,
  desktopBg,
  tabletBg,
  mobileBg
}) => {
  // הרחבת סוג ה-style כדי לכלול משתני CSS מותאמים אישית
  const bannerStyle: React.CSSProperties & {
    [key: string]: string;
  } = {
    '--desktop-bg': `url(${desktopBg})`,
    '--tablet-bg': `url(${tabletBg})`,
    '--mobile-bg': `url(${mobileBg})`
  };

  return (
    <div className="project-banner" style={bannerStyle}>
      <button className="close-button" onClick={onClose}>
        <img src="img/Back icon.svg" alt="Close" />
      </button>
      <div className="logo">
        <img src={logoSrc} alt={logoAlt} />
      </div>
      <div className="banner-content-project">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectBanner;
