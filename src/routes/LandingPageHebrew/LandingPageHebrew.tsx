import AboutUs from './AboutUs';
import BannerSection from './BannerSection';
import MainBanner from './MainBanner';
import OurService from './OurService';
import OurServiceN from './OurServicesN';
import StudioContactHebrew from './StudioContact';
import './Styles/main.scss';


const LandingPageHeb = () => {
    return (
        <div className="landing-page-heb">

            <MainBanner />
            <OurServiceN />
            <div>
                <h2 id="firstProject" className='project-title'>הפרוייקטים שלנו</h2>
                <BannerSection
                    sideClass="right"
                    href="https://t-and-t-shop.onrender.com/about"
                    title="Full Stack Development"
                    name="T&T Fashion"
                    description="חנות אונליין שנבנתה עם React ו-NodeJS"
                    sectionClass="fashion-heb"
                />
                <BannerSection
                    sideClass="left"
                    href="http://www.alex-osadchi.com/primo/"
                    title="Software Design"
                    name="Priimo"
                    description="התאמת טיפולים אישיים לסרטן"
                    sectionClass="priimo-heb"
                />
                <BannerSection
                    sideClass="right"
                    href="http://www.alex-osadchi.com/ilaan-shemesh/"
                    title="Management System"
                    name="Ilan Overview"
                    description="אפליקציה לניהול ליקויי דירה ומסירת דירות לרוכשים"
                    sectionClass="shemesh-heb"
                />
                <BannerSection
                    sideClass="left"
                    href="http://www.alex-osadchi.com/reability-online-2/"
                    title="Video Motion Game"
                    name="ReAbility Online"
                    description="משחקים לשיפור הקוגנטיביות"
                    sectionClass="reability-heb"
                />
            </div>


            <AboutUs />

            <div id="contactForm">
                <StudioContactHebrew />
            </div>

        </div>
    );
};

export default LandingPageHeb;