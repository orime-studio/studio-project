
import React from 'react';
import ProjectBanner from './components/MainBanner';
import AboutMyRoleSection from './components/AboutMyRole';
import TheResearch from './components/Research';
import TheChallenge from './components/TheChallenge';
import DetailProject from './components/DeatailProject';
import DesignSystem from './components/DesignSystem';
import './IlanShemesh.scss';
import Banner from './components/Banner';
import EnhancedDetailProject from './components/EnhancedDetailProject';
import BannerSection from '../LandingPageHebrew/BannerSection';

const IlanShemesh = () => {
    const handleClose = () => {
        window.location.href = "/";
    };

    const aboutContent = {
        title: 'על הפרוייקט',
        description:
            'האפליקציה שואפת ליצור פלטפורמה שתאפשר ניהול אי סדרים באתרי בנייה, וכן העברה מהירה ויעילה של נכסים לדיירים עתידיים. כיום, נהלי ניהול הנכסים מתבצעים באופן ידני, מה שמעכב את מסירת הדירות ויוצר נתק בין הקבלנים לעובדי הבנייה בנוגע לתיקון נזקים.'
    };

    const roleItems = {
        title: 'דברים שנעשו',
        cards: [
            { icon: '/img/dataflow-01.svg', alt: 'Research', text: 'זרימת משתמשים' },
            { icon: '/img/Desktop and Mobile (1).svg', alt: 'Wireframes', text: 'סקיצות ראשוניות' },
            { icon: '/img/microscope.svg', alt: 'User Flow', text: 'מחקר' },
            { icon: '/img/thumbs-up.svg', alt: 'UX/UI Design', text: 'בדיקת עיצוב' },
            { icon: '/img/magic-wand-01.svg', alt: 'Style Guide', text: 'מדריך סגנון' },
            { icon: '/img/brush-01 (1).svg', alt: 'Design QA', text: 'עיצוב UX/UI' }
        ]
    };

    const cardsData = [
        {
            imgSrc: '/img/clock-rewind.svg',
            imgAlt: 'Platforms',
            cardTitle: 'משך הפרויקט',
            cardDescription: 'חודש',
        },
        {
            imgSrc: '/img/ProjectTimeline.svg',
            imgAlt: 'Project Timeline',
            cardTitle: 'פלטפורמות',
            cardDescription: 'טאבלט ונייד',
        },
        {
            imgSrc: './img/users-01.svg',
            imgAlt: 'Project Type',
            cardTitle: 'משתמשים',
            cardDescription: 'מנהלי פרויקטים',
        },
        {
            imgSrc: './img/tag-01.svg',
            imgAlt: 'סוג הפרויקט',
            cardTitle: 'סוג הפרויקט',
            cardDescription: 'אפליקציה בתחום הנדל”ן',
        },

    ];




    return (
        <div className="ilan-shemesh-page">
            <ProjectBanner
                onClose={handleClose}
                logoSrc="img/Logo 1.svg"
                logoAlt="Logo Description"
                title="Ilan Overview"
                description="אפליקציה לניהול ליקויי דירה ומסירת דירות לרוכשים"
                desktopBg="/img/Ilan_DesktopB.png"
                tabletBg="/img/IlanTablet.png"
                mobileBg="/img/IlanMobile.png"
            />

            <AboutMyRoleSection
                aboutContent={aboutContent}
                roleItems={roleItems}
                isRTL={true}
            />

            <TheChallenge
                title="האתגר"
                description="האתגרים המרכזיים באפיון האפליקציה כוללים יצירת לוח בקרה (Dashboard) המכיל את כל המידע הנחוץ, כגון מספר הדירות, הקבלנים וליקויים שהטיפול בהם מתעכב. בנוסף, יש צורך בממשק ברור ומושך, יחד עם זמינות מהירה לטיפול בליקויים."
                cards={cardsData}
                isRTL={true}
            />

            <TheResearch
                className="rtl-text"
                title="המחקר"
                description="האפליקציה מיועדת בעיקר לבנאים ומנהלי פרויקטים, שאינם מרבים להשתמש בטכנולוגיות מורכבות. לכן, היה קריטי לפתח מערכת פשוטה וקלה לתפעול, שתסייע להם לעבור מתהליך ידני נוכחי לפלטפורמה דיגיטלית נוחה לשימוש. בהתחשב בכך שהזמן הוא רכיב קריטי במערכת, הושם דגש על פתרונות שמייעלים את העבודה, כגון לשוניות גדולות המכילות סיכומים של המידע החשוב ביותר, חלוקות ברורות ומובחנות בתוך הטקסט, כלי חיפוש מהיר וחכם המאפשר גישה ישירה לכל המידע, והתראות עבור פועלי בנייה על ליקויים חדשים, וכן עבור דיירים בעת חתימה על פרוטוקולים."
                image1={{ src: "/img/IlanNotes 02.png", alt: "Research Image 1" }}
                image2={{ src: "/img/IlanNotes 01.png", alt: "Research Image 2" }}
            />


            <DesignSystem
                title="Design System"
                description="המערכת עוצבה בסגנון מינימליסטי, פשוט ונקי כדי לאפשר עבודה חלקה עם המערכת בזמן עבודה בשטח בנוי"
                leftImages={[
                    { src: '/img/IllanFonts.png', alt: 'Left Image 1' },
                    { src: '/img/IlanColors.png', alt: 'Left Image 2' },
                ]}
                rightImage={{ src: '/img/IlanIcons.png', alt: 'Right Image' }}
            />


            <Banner
                desktopImageSrc="/img/Ilan_asset_23.jpeg"
        mobileImageSrc="/img/ILAN_Mobile_Mock.jpg"
                alt="תיאור התמונה"
            />

            <EnhancedDetailProject
                title="לוח בקרה ראשי"
                description="לוח הבקרה עוצב בסגנון מינימליסטי וברור, שבו מידע כללי ממוקם בפינה הימנית העליונה, סרגל התראות על ליקויים פוטנציאליים בחלק התחתון, ורשימת פועלי בנייה ואנשי מקצוע שאינם עומדים בזמנים בצד שמאל. מידע זה חשוב במיוחד, שכן הוא מספק למנהל האתר תמונה ברורה על העובדים שמתפקדים פחות טוב"
                mainImageSrc="/img/IlanDetail2.png"
                mainImageAlt="תיאור התמונה הראשית"
                shortImageSrc="/img/IlanDetail1.png"
                shortImageAlt="תיאור התמונה הנוספת"
                imageRight={false} 
                 imageWidth="700px" 
  imageHeight="auto"
            />

            <EnhancedDetailProject
                title="מערכת התראות"
                description="האפליקציה מיועדת בעיקר לבנאים ומנהלי פרויקטים, שאינם מרבים להשתמש בטכנולוגיות מורכבות. לכן, היה חשוב לפתח מערכת פשוטה וקלה לתפעול, שתאפשר למשתמשים מעבר נוח מהתהליך הידני הנוכחי לפלטפורמה דיגיטלית יעילה ונוחה לשימוש. מערכת ההתראות מספקת מידע קריטי בזמן אמת, ומסייעת בניהול אפקטיבי של העבודה באתר."
                mainImageSrc="/img/IlanDetail4.png"
                mainImageAlt="תיאור התמונה הראשית"
                shortImageSrc="/img/IlanDetail3.png"
                shortImageAlt="תיאור התמונה הנוספת"
                imageRight={true} 
                imageWidth="700px" 
  imageHeight="auto"
            />


            <EnhancedDetailProject
                title="תהליך החיפוש"
                description="המשתמש יכול לגשת לרשימת החיפושים האחרונים שלו, הכוללת את הקטגוריה שאליה משתייך כל חיפוש."
                mainImageSrc="/img/IlanDetail5.png"
                mainImageAlt="תיאור התמונה הראשית"
                shortImageSrc="/img/IlanDetail6.png"
                shortImageAlt="תיאור התמונה הנוספת"
                imageRight={false} 
                 imageWidth="700px" 
  imageHeight="auto"
            />

            <EnhancedDetailProject
           
                title="יצירת ליקויים חדשים"
                description="מסך יצירת הליקויים, המשמש לתיעוד נזקים חדשים הדורשים תיקון, עוצב בשני חלקים: בצד ימין מוצגת מפה שעליה ניתן לסמן נזקים או ליקויים, ובצד שמאל מוצעת אפשרות לערוך ליקויים שתועדו בעבר. פורמט זה נוצר כדי לאפשר למשתמש לראות בצורה ויזואלית את מיקום הליקוי, ובמקביל להאיץ את תהליך הדיווח עליו."
                mainImageSrc="/img/IlanDetail7.png"
                mainImageAlt="תיאור התמונה הראשית"
                shortImageSrc="/img/IlanDetail8.png"
                shortImageAlt="תיאור התמונה הנוספת"
                imageRight={true} 
               imageWidth="700px" 
  imageHeight="auto"
            />
<h2 id="firstProject" className='project-title'>הפרוייקטים שלנו</h2>
            <BannerSection
                variant="withMargin"
                sideClass="right"
                href="https://t-and-t-shop.onrender.com/about"
                title="Full Stack Development"
                name="T&T Fashion"
                description="חנות אונליין שנבנתה עם React ו-NodeJS"
                sectionClass="fashion-heb"
            />
            <BannerSection
            variant="withMargin"
                sideClass="left"
                href="http://www.alex-osadchi.com/primo/"
                title="Software Design"
                name="Priimo"
                description="התאמת טיפולים אישיים לסרטן"
                sectionClass="priimo-heb"
            />

            <BannerSection
            variant="withMargin"
                sideClass="left"
                href="http://www.alex-osadchi.com/reability-online-2/"
                title="Video Motion Game"
                name="ReAbility Online"
                description="משחקים לשיפור הקוגנטיביות"
                sectionClass="reability-heb"
            />


        </div>
    );
};

export default IlanShemesh;
