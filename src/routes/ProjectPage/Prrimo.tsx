
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

const Primo = () => {
    const handleClose = () => {
        window.location.href = "/";
    };

    const aboutContent = {
        title: 'על הפרוייקט',
        description:
            'האפליקציה נועדה לאפשר למטופלים גישה למידע הרפואי שלהם, להעלות מסמכים רפואיים, לתזמן ולצפות בתורני בדיקות כגון MRI ו-PSA וביופסיות. בנוסף, המשתמשים יכולים למצוא מידע נוסף על מחלתם באמצעות מאמרים וסרטונים, ולתקשר עם אנשי קשר חיוניים כמו רופאים, בתי חולים ומרפאות. הפלטפורמה מספקת חוויית משתמש אינטואיטיבית ונגישה, המאפשרת ניהול קל ויעיל של טיפול סרטן הערמונית.'
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
            cardDescription: 'חודשיים',
        },
        {
            imgSrc: '/img/ProjectTimeline.svg',
            imgAlt: 'Project Timeline',
            cardTitle: 'פלטפורמות',
            cardDescription: 'נייד',
        },
        {
            imgSrc: './img/users-01.svg',
            imgAlt: 'Project Type',
            cardTitle: 'משתמשים',
            cardDescription: 'מטופלים ורופאים',
        },
        {
            imgSrc: './img/tag-01.svg',
            imgAlt: 'סוג הפרויקט',
            cardTitle: 'סוג הפרויקט',
            cardDescription:'אפליקצייה בתחום הרפואה'
        },

    ];




    return (
        <div className="ilan-shemesh-page">
            <ProjectBanner
                onClose={handleClose}
                logoSrc="img/Logo 1.svg"
                logoAlt="Logo Description"
                title="Priimo App"
                description="PriiMO היא פלטפורמה דיגיטלית המשתמשת בבינה מלאכותית להתאמת טיפולי סרטן מותאמים אישית למטופלים ולרופאים, עם עיצוב אינטואיטיבי ואבטחת איכות בכל שלבי הפיתוח והיישום."
                desktopBg="/img/Primo/Priimo_Desktop.png"
                tabletBg="/img/Primo/Priimo_Mobile.png"
                mobileBg="/img/Primo/Priimo_Tablet.png"
            />

            <AboutMyRoleSection
                aboutContent={aboutContent}
                roleItems={roleItems}
                isRTL={true}
            />

            <TheChallenge
                title="האתגר"
                description="האתגרים המרכזיים ביצירת האפליקציה כללו ארגון כל המידע לפי קטגוריות ובניית היררכיות מתאימות, עיצוב מסד נתונים ברור וישיר למשתמש, ופיתוח כלי ניווט פשוט ומהיר. בנוסף, היה צורך לוודא שהממשק יהיה ידידותי ונגיש למשתמשים במצבים רגישים, תוך שמירה על אמינות ודיוק במידע המוצג."
                cards={cardsData}
                isRTL={true}
            />

            <TheResearch
                className="rtl-text"
                title="המחקר"
                description="בשלב הראשון של המחקר מייןתי את כל הנתונים לפי קטגוריות ובניתי תרשים זרימה על מנת להתבונן באפליקציה מנקודת מבט המשתמש. כדי למנוע עומס מידע על המשתמש, השתמשתי בשיטות שמגבירות את הנוחות והקלות במציאת המידע. יצרתי מערכי נתונים המכילים 3-5 פרטי מידע בכל מערך, כאשר כל מערך נמצא בכרטיסייה נפרדת ומסודר בסליידר. בנוסף, בהתחשב בכך שהמשתמשים באפליקציה הם נושאי סרטן הערמונית ושצפייה בנתוניהם עשויה להיות מלחיצה, עיצבתי את הממשק עם צורות עגולות ורכות וצבעים עדינים כמו ורוד בהיר במקום אדום חזק, במטרה להפחית חרדה וליצור תחושת רוגע ושלווה."
                image1={{ src: "/img/Primo/asset 3.png", alt: "Research Image 1" }}
                image2={{ src: "/img/Primo/asset 4.png", alt: "Research Image 2" }}
            />


            <DesignSystem
                title="Design System"
                description="המערכת עוצבה בסגנון מינימליסטי, פשוט ונקי כדי לאפשר עבודה חלקה עם המערכת בזמן טיפול שליחת מסמכים רגישים וקבלת תשובות"
                leftImages={[
                    { src: '/img/Primo/Fonts.png', alt: 'Left Image 1' },
                    { src: '/img/Primo/Colors.png', alt: 'Left Image 2' },
                ]}
                rightImage={{ src: '/img/Primo/Icons.png', alt: 'Right Image' }}
            />


            <Banner
                desktopImageSrc="/img/Primo/bannermid.png"
        mobileImageSrc="/img/Primo/bannermid.png"
                alt="תיאור התמונה"
            />

            <EnhancedDetailProject
                title="לוח בקרה ראשי"
                description="לוח הבקרה עוצב בסגנון מינימליסטי וברור, שבו מידע כללי ממוקם בפינה הימנית העליונה, סרגל התראות על ליקויים פוטנציאליים בחלק התחתון, ורשימת פועלי בנייה ואנשי מקצוע שאינם עומדים בזמנים בצד שמאל. מידע זה חשוב במיוחד, שכן הוא מספק למנהל האתר תמונה ברורה על העובדים שמתפקדים פחות טוב"
                mainImageSrc="/img/IlanDetail2.png"
                mainImageAlt="תיאור התמונה הראשית"
                shortImageSrc="/img/IlanDetail1.png"
                shortImageAlt="תיאור התמונה הנוספת"
                imageRight={false} // אם רוצים שהתמונות יהיו בצד ימין, לשים true
            />

            <EnhancedDetailProject
                title="מערכת התראות"
                description="האפליקציה מיועדת בעיקר לבנאים ומנהלי פרויקטים, שאינם מרבים להשתמש בטכנולוגיות מורכבות. לכן, היה חשוב לפתח מערכת פשוטה וקלה לתפעול, שתאפשר למשתמשים מעבר נוח מהתהליך הידני הנוכחי לפלטפורמה דיגיטלית יעילה ונוחה לשימוש. מערכת ההתראות מספקת מידע קריטי בזמן אמת, ומסייעת בניהול אפקטיבי של העבודה באתר."
                mainImageSrc="/img/IlanDetail4.png"
                mainImageAlt="תיאור התמונה הראשית"
                shortImageSrc="/img/IlanDetail3.png"
                shortImageAlt="תיאור התמונה הנוספת"
                imageRight={true} // אם רוצים שהתמונות יהיו בצד ימין, לשים true
            />


            <EnhancedDetailProject
                title="תהליך החיפוש"
                description="המשתמש יכול לגשת לרשימת החיפושים האחרונים שלו, הכוללת את הקטגוריה שאליה משתייך כל חיפוש."
                mainImageSrc="/img/IlanDetail5.png"
                mainImageAlt="תיאור התמונה הראשית"
                shortImageSrc="/img/IlanDetail6.png"
                shortImageAlt="תיאור התמונה הנוספת"
                imageRight={false} // אם רוצים שהתמונות יהיו בצד ימין, לשים true
            />

            <EnhancedDetailProject
           
                title="יצירת ליקויים חדשים"
                description="מסך יצירת הליקויים, המשמש לתיעוד נזקים חדשים הדורשים תיקון, עוצב בשני חלקים: בצד ימין מוצגת מפה שעליה ניתן לסמן נזקים או ליקויים, ובצד שמאל מוצעת אפשרות לערוך ליקויים שתועדו בעבר. פורמט זה נוצר כדי לאפשר למשתמש לראות בצורה ויזואלית את מיקום הליקוי, ובמקביל להאיץ את תהליך הדיווח עליו."
                mainImageSrc="/img/IlanDetail7.png"
                mainImageAlt="תיאור התמונה הראשית"
                shortImageSrc="/img/IlanDetail8.png"
                shortImageAlt="תיאור התמונה הנוספת"
                imageRight={true} // אם רוצים שהתמונות יהיו בצד ימין, לשים true
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
                    sideClass="right"
                    href="/ilan-shemesh"
                    title="Management System"
                    name="Ilan Overview"
                    description="אפליקציה לניהול ליקויי דירה ומסירת דירות לרוכשים"
                    sectionClass="shemesh-heb"
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

export default Primo;
