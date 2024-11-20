import ProjectBanner from "./components/MainBanner";

// Main Page Component
const MainPage = () => {
  const handleClose = () => {
    window.location.href = "/"; // Redirect to homepage
  };

  return (
    <div className="main-page-project">
      <ProjectBanner 
        onClose={handleClose}
        logoSrc="public/img/LogoA.svg"
        logoAlt="Logo Description"
        title="Scope - AI Agent Builder"
        description="Skope has developed a digital platform for both patients and their physicians that uses AI-based precision medicine engines to personalize cancer treatment plans. My job included characterization, developing the"
      />
    </div>
  );
};

export default MainPage;