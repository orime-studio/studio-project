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

            <div className="banner-section-heb fashion-heb" id="firstProject">
                <a href="https://finalproject-ousr.onrender.com/about" target="_blank" rel="noopener noreferrer" className="content-overlay-heb">
                    <div className="content-square-heb">
                        <div>
                        <h3 className="ecommerce-title-heb">Full Stack Development</h3>
                        <h2 className="ecommerce-name-heb">T&T Fashion</h2>
                        <p className="ecommerce-description-heb">Online shop built with React and NodeJS</p>
                        </div>
                        <div className="arrow-icon-container-heb">
                            <img src="img/Arrow.svg" alt="Arrow Icon" className="arrow-icon-heb" />
                        </div>
                    </div>
                </a>
            </div>


            <div className="banner-section-heb priimo-heb">
                <a href="http://www.alex-osadchi.com/primo/" target="_blank" rel="noopener noreferrer" className="content-overlay-heb left">
                    <div className="content-square-heb">
                        <div>
                        <h3 className="ecommerce-title-heb">Software Design</h3>
                        <h2 className="ecommerce-name-heb">Priimo</h2>
                        <p className="ecommerce-description-heb">Personalizing Cancer Treatments</p>
                        </div>
                        <div className="arrow-icon-container-heb">
                            <img src="img/Arrow.svg" alt="Arrow Icon" className="arrow-icon-heb" />
                        </div>
                    </div>
                </a>
            </div>

            <div className="banner-section-heb shemesh-heb">
                <a href="http://www.alex-osadchi.com/ilaan-shemesh/" target="_blank" rel="noopener noreferrer" className="content-overlay-heb right">
                    <div className="content-square-heb">
                        <div>
                        <h3 className="ecommerce-title-heb">Management System</h3>
                        <h2 className="ecommerce-name-heb">Ilan Overview</h2>
                        <p className="ecommerce-description-heb">App for managing apartment defects and buyer delivery</p>
                        </div>
                        <div className="arrow-icon-container-heb">
                            <img src="img/Arrow.svg" alt="Arrow Icon" className="arrow-icon-heb" />
                        </div>
                    </div>
                </a>
            </div>


            <div className="banner-section-heb reability-heb">
                <a href="http://www.alex-osadchi.com/reability-online-2/" target="_blank" rel="noopener noreferrer" className="content-overlay-heb left">
                    <div className="content-square-heb">
                        <div>
                        <h3 className="ecommerce-title-heb">Video Motion Game</h3>
                        <h2 className="ecommerce-name-heb">ReAbility Online</h2>
                        <p className="ecommerce-description-heb">Games for Cognitive Motion Rehabilitation</p>
                        </div>
                        <div className="arrow-icon-container-heb">
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