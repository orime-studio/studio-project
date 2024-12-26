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

const Reability = () => {
    const handleClose = () => {
        window.location.href = "/";
    };

    const aboutContent = {
        title: 'על הפרוייקט',
        description:
            'מטרת מערכת התנועה היא לסייע למטופלי שבץ בשיקום מהבית באמצעות תרגילי בקרה מוטורית והדרכה בשיתוף עם המטפל. המערכת דורשת ציוד בסיסי כגון מחשב ו-Webcam, ובכך מבטלת את הצורך במרפאות.'
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
            cardDescription: 'מחשב',
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
                title="Reability Games"
                description="מערכת התנועה (Reability Games) משפרת את הכישורים המוטוריים, הקוגניטיביים והתפקודיים של המטופל. המערכת עושה שימוש במצלמת תלת-ממד סטנדרטית לניתוח תנועות המטופל בזמן ביצוע משימות פונקציונליות ומשחקים מגוונים, במטרה לוודא ביצוע תנועות מדויקות."
                desktopBg="/img/Reability/Reability_Desktop.png"
                tabletBg="/img/Reability/Reability_Tablet.png"
                mobileBg="/img/Reability/Reability_Mobile.png"
            />

            <AboutMyRoleSection
                aboutContent={aboutContent}
                roleItems={roleItems}
                isRTL={true}
            />

            <TheChallenge
                title="האתגר"
                description={
                    <>
                        <p>האתגרים המרכזיים בפיתוח המערכת כללו:</p>
                        <ul>
                            <li>•בניית שפה עיצובית מתאימה למטופלים</li>
                            <li>יצירת כלי ניווט שמתאים למגבלות הפיזיות של המטופלים</li>
                            <li>עיצוב איורים ואנימציות ברורים ואסתטיים</li>
                        </ul>
                    </>
                }
                cards={cardsData}
                isRTL={true}
            />

            <TheResearch
                className="rtl-text"
                title="המחקר"
                description="כדי לאפשר למטפל לעקוב אחר מדדי הביצועים של המטופל, כל המשחקים מנוהלים אך ורק באמצעות תנועות הידיים. מתוך כך, היה חיוני לעצב ממשק משתמש עם כלי ניווט ואינטראקציה מתאימים. לקחנו בחשבון שהכפתורים יהיו גדולים מספיק כדי שהמשתמשים יוכלו לקרוא את התוכן שלהם גם כאשר הסמן מרחף מעליהם. מכיוון שהמשתמשים הם מטופלים עם מוגבלויות מוטוריות, הפרדנו את הכפתורים ככל האפשר כדי למנוע טעויות בניווט. בנוסף, כל כפתור מאופיין בצבע ואייקון ייחודיים. על מנת להתאים לצרכי המטופלים, עיצבתי כלי ניווט מיוחד שמוודא שכאשר מטופל מרחף מעל כפתור, מופעל טיימר ויזואלי של 3 שניות לפני ביצוע הפעולה, מה שמסייע בהפחתת טעויות בבחירת המשתמש."
                image1={{ src: "/img/Reability/NOTE1.jpeg", alt: "Research Image 1" }}
                image2={{ src: "/img/Reability/NOTE2.png", alt: "Research Image 2" }}
            />


            <DesignSystem
                title="Design System"
                description="עיצבתי שני סוגי מערכות: אחת למטופל ואחת למטפל. מערכת המטופל מותאמת למסך הבית ונשלטת באמצעות ידיו ומצלמת תלת-ממד, לבדיקת הכישורים הקוגניטיביים והמוטוריים שלו. מערכת המטפל מותאמת למחשב שמאפשר תקשורת עם המטופל, התאמת רמות קושי, תזמון פגישות, איסוף נתונים על המקרה וקביעת מצב המטופל."
                leftImages={[
                    { src: '/img/Reability/Fonts.png', alt: 'Left Image 1' },
                    { src: '/img/Reability/Colors.png', alt: 'Left Image 2' },
                ]}
                rightImage={{ src: '/img/Reability/Icons.png', alt: 'Right Image' }}
            />


            <Banner
                desktopImageSrc="/img/Reability/banner.png"
        mobileImageSrc="/img/Reability/banner.png"
                alt="תיאור התמונה"
            />

          
<DetailProject
        title="חדר משחקים"
        description="האיורים על כרכי המשחקים פשוטים וברורים, כולם מעוצבים בשלושה צבעים וצורות גאומטריות מובחנות. המשחק נפתח לאחר טיימר של 3 שניות כדי להבהיר למטופל שהוא נכנס למשחק. המשחק הנבחר מוצג כהה יותר ומתכתי."
        imageSrc="/img/Reability/Lobby.png"
        imageAlt="Main Dashboard Image"
        imageRight={true} 
      />

      <DetailProject
        title="בקשת חיבור"
        description="המטופל חייב לעמוד בטיימר של 3 שניות בעת ניווט במערכת כדי למנוע טעויות הנגרמות מהמגבלות הפיזיות שלו. במקרה זה, המטופל מקבל בקשת שיחת וידאו מהמטפל, שהוא יכול לסרב או לקבל. אם המטופל לא מגיב תוך 10 שניות, הבקשה תעלם מהמסך."
        imageSrc="/img/Reability/ConnectionRequest.png"
        imageAlt="Detailed Reports Image"
        imageRight={false} 
      />
      
<DetailProject
        title="רמת כאב"
        description="כל שבועיים, המטופל מקבל שאלון אינטראקטיבי לגבי רמת הכאב שלו. סולם מדידת הכאב כולל שישה רמות, כל אחת עם אימוג'י ותיאור מתאים."
        imageSrc="/img/Reability/PainLevel.png"
        imageAlt="Main Dashboard Image"
        imageRight={true} 
      />

      <DetailProject
        title="משחק אופניים"
        description="המשחק מדמה רכיבה על אופניים באמצעות מכשיר ספינינג. המסך מעוצב כך שיחזק את תחושת הרכיבה. בצד שמאל של המסך נמצא מד דופק התואם למהירות הווידאו, במרכז שלושה מדדים למדידת מרחק, מהירות וקלוריות שנשרפו. בפינה העליונה הימנית, עיצבתי את מסלול הרכיבה של המטופל. כל הפרמטרים מחושבים באמצעות מצלמת עומק."
        imageSrc="/img/Reability/Bicycle.png"
        imageAlt="Detailed Reports Image"
        imageRight={false} 
      />
    
      
<DetailProject
        title="מסך טיפולים"
        description="בצד שמאל, מקמתי סרגל המציג את המטופלים הזמינים לחיבור עם המטפל. מעל, יצרתי מונה המציג את מספר המטופלים הכולל ושורת חיפוש."
        imageSrc="/img/Reability/Treatments.png"
        imageAlt="Main Dashboard Image"
        imageRight={true} 
      />

      <DetailProject
        title="טיפול מלא"
        description="ברגע שהבקשה מתקבלת, המטפל רואה שידור חי של מסך המטופל ויכול להדריך אותו בזמן אמת. בחלק העליון של המסך יש שלושה בקרים: נתק שיחה, הגדרות וכיבוי קול. ניתן לטפל בו זמנית בארבעה מטופלים מרביים. כדי לטפל במטופל חדש, על המטפל לסיים אחד מהשיחות הקיימות."
        imageSrc="/img/Reability/FullTreatment.png"
        imageAlt="Detailed Reports Image"
        imageRight={false} 
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
                href="/priimo/"
                title="Software Design"
                name="Priimo"
                description="התאמת טיפולים אישיים לסרטן"
                sectionClass="priimo-heb"
            />


        </div>
    );
};

export default Reability;
