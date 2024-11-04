import AboutUs from './AboutUs';
import MainBanner from './MainBanner';
import OurService from './OurService';
import OurServiceN from './OurServicesN';
import StudioContactHebrew from './StudioContact';
import './Styles/main.scss';






const LandingPageHeb = () => {
    return (
        <div className="landing-page-heb">

            <MainBanner />


            <OurServiceN/>

            <div className="banner-section-heb" id="firstProject">
                <img src="img/T&T Fashion.jpg" alt="Banner Image" className="banner-image fashion" />
                <a href="https://finalproject-ousr.onrender.com/about" target="_blank" rel="noopener noreferrer" className="content-overlay">
                    <div className="content-square">
                        <h3 className="ecommerce-title">Full Stuck Development</h3>
                        <h2 className="ecommerce-name">T&T Fashion</h2>
                        <p className="ecommerce-description">Online shop was built by React and NodeJS</p>
                        <div className="arrow-icon-container">
                            <img src="img/Arrow.svg" alt="Arrow Icon" className="arrow-icon-heb" />
                        </div>
                    </div>
                </a>
            </div>

            {/* sectio private projects
 */}
            <div className="banner-section-heb">
                <img src="img/Priimo.jpg" alt="Banner Image" className="banner-image priimo" />
                <a href="http://www.alex-osadchi.com/primo/" target="_blank" rel="noopener noreferrer" className="left-content-overlay">
                    <div className="left-content-square">
                        <h3 className="ecommerce-title">Software Design</h3>
                        <h2 className="ecommerce-name">Priimo</h2>
                        <p className="ecommerce-description">Personalizing Cancer Treatments</p>
                        <div className="arrow-icon-container">
                            <img src="img/Arrow.svg" alt="Arrow Icon" className="arrow-icon-heb" />
                        </div>
                    </div>
                </a>
            </div>

            {/* ILAN
 */}

            <div className="banner-section-heb">
                <img src="img/Ilan.jpg" alt="Banner Image" className="banner-image shemesh" />
                <a href="http://www.alex-osadchi.com/ilaan-shemesh/" target="_blank" rel="noopener noreferrer" className="content-overlay">
                    <div className="content-square">
                        <h3 className="ecommerce-title">Management System</h3>
                        <h2 className="ecommerce-name">Ilan Overview</h2>
                        <p className="ecommerce-description">App for managing apartment defects and buyer delivery</p>
                        <div className="arrow-icon-container">
                            <img src="img/Arrow.svg" alt="Arrow Icon" className="arrow-icon-heb" />
                        </div>
                    </div>
                </a>
            </div>

            {/* sectio private projects
 */}
            <div className="banner-section-heb">
                <img src="img/Reability.jpg" alt="Banner Image" className="banner-image reability" />
                <a href="http://www.alex-osadchi.com/reability-online-2/" target="_blank" rel="noopener noreferrer" className="left-content-overlay">
                    <div className="left-content-square">
                        <h3 className="ecommerce-title">Video Motion Game</h3>
                        <h2 className="ecommerce-name">ReAbility Online</h2>
                        <p className="ecommerce-description">Games for Cognitive Motion Rehabilitation</p>
                        <div className="arrow-icon-container">
                            <img src="img/Arrow.svg" alt="Arrow Icon" className="arrow-icon-heb" />
                        </div>
                    </div>
                </a>
            </div>

          <AboutUs />

            <div id="contactForm">
                <StudioContactHebrew />
            </div>

        </div>
    );
};

export default LandingPageHeb;