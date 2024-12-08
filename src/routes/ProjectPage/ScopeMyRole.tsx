import OurStoryMobile from "../LandingPageHebrew/OurStoryMobile";
import AboutMyRoleSection from "./components/AboutMyRole";
import TheChallenge from "./components/TheChallenge";

const AboutMyRole = () => {
    const aboutContent = {
      title: 'About',
      description:
        'The purpose of the app is to allow the patient to: Access their medical information, Upload medical documents, Schedule and view appointments for tests, such as MRI & PSA, Biopsies, Find additional information about their disease through articles and videos, Communicate with essential contacts, such as physicians, the hospital, clinics etc.'
    };
  
    const roleItems = {
      title: 'My Role',
      cards: [
        { icon: '/path/to/research-icon.svg', alt: 'Research', text: 'Research' },
        { icon: '/path/to/wireframes-icon.svg', alt: 'Wireframes', text: 'Wireframes' },
        { icon: '/path/to/user-flow-icon.svg', alt: 'User Flow', text: 'User Flow' },
        { icon: '/path/to/ux-ui-icon.svg', alt: 'UX/UI Design', text: 'UX/UI Design' },
        { icon: '/path/to/style-guide-icon.svg', alt: 'Style Guide', text: 'Style Guide' },
        { icon: '/path/to/qa-icon.svg', alt: 'Handoff & Design QA', text: 'Handoff & Design QA' }
      ]
    };
  
    return (
      <div>

        <OurStoryMobile />

      </div>
    );
  };
  
  export default AboutMyRole;