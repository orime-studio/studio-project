import AboutUs from './AboutUs';
import BannerSection from './BannerSection';
import MainBanner from './MainBanner';
import OurServiceN from './OurServicesN';
import OurStory from './OurStory';
import StudioContactHebrew from './StudioContact';
import './Styles/main.scss';
import WhatsAppButton from './WhatsAppButton';


const LandingPageHeb = () => {
    return (
        <div className="landing-page-heb">

            <MainBanner />
            <OurServiceN />
            <div>
                <h2 id="firstProject" className='project-title'>הפרוייקטים שלנו</h2>
                <BannerSection
                variant="none"
                    sideClass="right"
                    href="https://t-and-t-shop.onrender.com/about"
                    title="Full Stack Development"
                    name="T&T Fashion"
                    description="חנות אונליין שנבנתה עם React ו-NodeJS"
                    sectionClass="fashion-heb"
                />
                <BannerSection
                variant="none"
                    sideClass="left"
                    href="/priimo"
                    title="Software Design"
                    name="Priimo"
                    description="התאמת טיפולים אישיים לסרטן"
                    sectionClass="priimo-heb"
                />
                <BannerSection
                variant="none"
                    sideClass="right"
                    href="/ilan-shemesh"
                    title="Management System"
                    name="Ilan Overview"
                    description="אפליקציה לניהול ליקויי דירה ומסירת דירות לרוכשים"
                    sectionClass="shemesh-heb"
                />
                <BannerSection
                variant="none"
                    sideClass="left"
                    href="/reability"
                    title="Video Motion Game"
                    name="ReAbility Online"
                    description="משחקים לשיפור הקוגנטיביות"
                    sectionClass="reability-heb"
                />
               
            </div>
            <AboutUs />
            <OurStory />
            <div id="contactForm">
                <StudioContactHebrew />
            </div>
            <WhatsAppButton />

        </div>
    );
};

export default LandingPageHeb;