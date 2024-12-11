/* 
import React from 'react';
import ProjectBanner from './components/MainBanner';
import AboutMyRoleSection from './components/AboutMyRole';
import TheResearch from './components/Research';
import TheChallenge from './components/TheChallenge';
import DetailProject from './components/DeatailProject';
import DesignSystem from './components/DesignSystem';

const IlanShemesht = () => {
  const handleClose = () => {
    window.location.href = "/"; // Redirect to homepage
  };

  const aboutContent = {
    title: 'About',
    description:
      'The purpose of the app is to allow the patient to: Access their medical information, Upload medical documents, Schedule and view appointments for tests, such as MRI & PSA, Biopsies, Find additional information about their disease through articles and videos, Communicate with essential contacts, such as physicians, the hospital, clinics etc.'
  };

  const roleItems = {
    title: 'My Role',
    cards: [
      { icon: '/img/code-browser.svg', alt: 'Research', text: 'Research' },
      { icon: '/img/Desktop and Mobile.svg', alt: 'Wireframes', text: 'Wireframes' },
      { icon: '/img/building-02.svg', alt: 'User Flow', text: 'User Flow' },
      { icon: '/img/cursor-box.svg', alt: 'UX/UI Design', text: 'UX/UI Design' },
      { icon: '/img/brush-01.svg', alt: 'Style Guide', text: 'Style Guide' },
      { icon: '/img/UI Consultation.svg', alt: 'Design QA', text: 'Design QA' }
    ]
  };

const cardsData = [
    {
        imgSrc: 'img/Platforms.svg',
        imgAlt: 'Platforms',
        cardTitle: 'Platforms',
        cardDescription: 'Mobile & Desktop',
    },
    {
        imgSrc: '/img/ProjectTimeline.svg',
        imgAlt: 'Project Timeline',
        cardTitle: 'Project Timeline',
        cardDescription: 'Two Months',
    },
    {
        imgSrc: './img/ProjectType.svg',
        imgAlt: 'Project Type',
        cardTitle: 'Project Type',
        cardDescription: 'Medical App',
    },
    {
        imgSrc: './img/Users.svg',
        imgAlt: 'Users',
        cardTitle: 'Users',
        cardDescription: 'Patients',
    },
];




  return (
    <div className="ilan-shemesh-page">
      <ProjectBanner 
        onClose={handleClose}
        logoSrc="img/LogoA.svg"
        logoAlt="Logo Description"
        title="Scope - AI Agent Builder"
        description="Skope has developed a digital platform for both patients and their physicians that uses AI-based precision medicine engines to personalize cancer treatment plans. My job included characterization, developing the"
      />
      <AboutMyRoleSection aboutContent={aboutContent} roleItems={roleItems} />

        <TheChallenge
        title="The Challenge"
        description="The purpose of the app is to allow the patient
       to: Access their medical information, Upload medical documents,
       Schedule and view appointments for tests, such as MRI & PSA,
       Biopsies , Find additional information about their disease through articles and videos,
       Communicate with essential contacts, such as physicians, the hospital, clinics etc."
        cards={cardsData}
    />

      <TheResearch 
       className="rtl-text"
        title="The Research"
        description="The purpose of the app is to allow the patient to: Access their medical information, Upload medical documents, Schedule and view appointments for tests, such as MRI & PSA, Biopsies , Find additional information about their disease through articles and videos , Communicate with essential contacts, such as physicians, the hospital, clinics etc."
        image1={{ src: "/img/image 15.png", alt: "Research Image 1" }}
        image2={{ src: "/img/image 160.png", alt: "Research Image 2" }}
        desktopBg="/img/DesktopBanner.png"
        tabletBg="/img/TabletBanner.png"
        mobileBg="/img/MobileBanner.png"
      />


<DesignSystem
      title="Design System"
      description="תיאור קצר לגבי המערכת העיצובית ותפקידה"
      leftImages={[
        { src: '/img/FontsIlan.png', alt: 'Left Image 1' },
        { src: '/img/ColorsIlan.png', alt: 'Left Image 2' },
      ]}
      rightImage={{ src: '/img/IconsIlan.png', alt: 'Right Image' }}
    />

<DetailProject
        title="Main Dashboard"
        description="The purpose of the app is to allow the patient to: Access their medical information, Upload medical documents, Schedule and view appointments for tests, such as MRI & PSA, Biopsies, Find additional information about their disease through articles and videos, Communicate with essential contacts, such as physicians, the hospital, clinics etc."
        imageSrc="/img/Scope main Banner image.png"
        imageAlt="Main Dashboard Image"
        imageRight={true} // תמונה בצד ימין
      />

      <DetailProject
        title="Detailed Reports"
        description="The app offers the ability to generate detailed reports for both patients and physicians, providing valuable insights into the treatment progress and recommendations."
        imageSrc="/img/Scope main Banner image.png"
        imageAlt="Detailed Reports Image"
        imageRight={false} // תמונה בצד שמאל
      />
    </div>
  );
};

export default IlanShemesht;
 */