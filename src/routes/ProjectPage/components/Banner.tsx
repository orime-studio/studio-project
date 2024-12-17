/* import React from 'react';
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
 */

// Banner.tsx
import React from 'react';
import './Banner.scss';

interface BannerProps {
  desktopImageSrc: string;
  mobileImageSrc: string;
  alt: string;
}

const Banner: React.FC<BannerProps> = ({ desktopImageSrc, mobileImageSrc, alt }) => {
  // הגדרת משתני CSS מותאמים אישית עם שמות ייחודיים
  const bannerStyle: React.CSSProperties & {
    [key: string]: string;
  } = {
    '--banner-desktop-bg': `url(${desktopImageSrc})`,
    '--banner-mobile-bg': `url(${mobileImageSrc})`,
  };

  return (
    <div className="banner-container" style={bannerStyle} aria-label={alt}>
      {/* ניתן להוסיף כאן תוכן נוסף אם יש צורך */}
    </div>
  );
};

export default Banner;