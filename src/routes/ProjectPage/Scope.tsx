/* import ProjectBanner from "./components/MainBanner";

// Main Page Component
const MainPage = () => {
  const handleClose = () => {
    window.location.href = "/"; // Redirect to homepage
  };


  return (
    <div className="main-page-project">
      <ProjectBanner 
        onClose={handleClose}
        logoSrc="img/LogoA.svg"
        logoAlt="Logo Description"
        title="Scope - AI Agent Builder"
        description="Skope has developed a digital platform for both patients and their physicians that uses AI-based precision medicine engines to personalize cancer treatment plans. My job included characterization, developing the"
      />
    </div>
  );
};

export default MainPage; */


import React from 'react';
import ProjectBanner from './components/MainBanner';
import AboutMyRoleSection from './components/AboutMyRole';
import TheResearch from './components/Research';
import TheChallenge from './components/TheChallenge';

// Main Page Component
const MainPage = () => {
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
      { icon: '/img/UI Consultation.svg', alt: 'Research', text: 'Research' },
      { icon: '/img/UI Consultation.svg', alt: 'Wireframes', text: 'Wireframes' },
      { icon: '/img/UI Consultation.svg', alt: 'User Flow', text: 'User Flow' },
      { icon: 'public/img/UI Consultation.svg', alt: 'UX/UI Design', text: 'UX/UI Design' },
      { icon: 'public/img/UI Consultation.svg', alt: 'Style Guide', text: 'Style Guide' },
      { icon: 'public/img/UI Consultation.svg', alt: 'Design QA', text: 'Design QA' }
    ]
  };

 /*  const researchContent = {
    title: "The Research",
    description: "The purpose of the app is to allow the patient to access their medical information, upload medical documents, schedule and view appointments for tests, and more.",
    image1: { src: "public/img/Image1.png", alt: "Research Image 1" },
    image2: { src: "public/img/Image2.png", alt: "Research Image 2" }
  }; */


  return (
    <div className="main-page-project">
      <ProjectBanner 
        onClose={handleClose}
        logoSrc="img/LogoA.svg"
        logoAlt="Logo Description"
        title="Scope - AI Agent Builder"
        description="Skope has developed a digital platform for both patients and their physicians that uses AI-based precision medicine engines to personalize cancer treatment plans. My job included characterization, developing the"
      />
      <AboutMyRoleSection aboutContent={aboutContent} roleItems={roleItems} />

      <TheChallenge
       title='The Challenge'
       description='The purpose of the app is to allow the patient
       to: Access their medical information, Upload medical documents,
       Schedule and view appointments for tests, such as MRI & PSA,
       Biopsies , Find additional information about their disease through articles and videos,
       Communicate with essential contacts, such as physicians, the hospital, clinics etc.'
       />

      <TheResearch 
        title="The Research"
        description="The purpose of the app is to allow the patient to: Access their medical information, Upload medical documents, Schedule and view appointments for tests, such as MRI & PSA, Biopsies , Find additional information about their disease through articles and videos , Communicate with essential contacts, such as physicians, the hospital, clinics etc."
        image1={{ src: "/img/image 15.png", alt: "Research Image 1" }}
        image2={{ src: "public/img/image 14.png", alt: "Research Image 2" }}
      />

    </div>
  );
};

export default MainPage;