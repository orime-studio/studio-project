
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

const IlanShemesh = () => {
    const handleClose = () => {
        window.location.href = "/"; // Redirect to homepage
    };

    const aboutContent = {
        title: 'About',
        description:
            'The purpose of the app is to allow the patient to: Access their medical information, Upload medical documents, Schedule and view appointments for tests, such as MRI & PSA, Biopsies, Find additional information about their disease through articles and videos, Communicate with essential contacts, such as physicians, the hospital, clinics etc.'
    };

    const roleItems = {
        title: 'דברים שנעשו',
        cards: [
            { icon: '/img/code-browser.svg', alt: 'Research', text: 'Research' },
            { icon: '/img/Desktop and Mobile.svg', alt: 'Wireframes', text: 'Wireframes' },
            { icon: '/img/building-02.svg', alt: 'User Flow', text: 'User Flow' },
            { icon: '/img/cursor-box.svg', alt: 'UX/UI Design', text: 'UX/UI Design' },
            { icon: '/img/brush-01.svg', alt: 'Style Guide', text: 'Style Guide' },
            { icon: '/img/UI Consultation.svg', alt: 'Design QA', text: 'Design QA' }
        ]
    };

    const cardsData = [
        {
            imgSrc: 'img/Platforms.svg',
            imgAlt: 'Platforms',
            cardTitle: 'Platforms',
            cardDescription: 'Mobile & Desktop',
        },
        {
            imgSrc: '/img/ProjectTimeline.svg',
            imgAlt: 'Project Timeline',
            cardTitle: 'Project Timeline',
            cardDescription: 'Two Months',
        },
        {
            imgSrc: './img/ProjectType.svg',
            imgAlt: 'Project Type',
            cardTitle: 'Project Type',
            cardDescription: 'Medical App',
        },
        {
            imgSrc: './img/Users.svg',
            imgAlt: 'Users',
            cardTitle: 'Users',
            cardDescription: 'Patients',
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
                desktopBg="/img/IlanDesktop.png"
                tabletBg="/img/IlanTablet.png"
                mobileBg="/img/IlanMobile.png"
            />

            <AboutMyRoleSection 
        aboutContent={aboutContent} 
        roleItems={roleItems} 
        isRTL={true}
      />

            <TheChallenge
                title="The Challenge"
                description="The purpose of the app is to allow the patient
       to: Access their medical information, Upload medical documents,
       Schedule and view appointments for tests, such as MRI & PSA,
       Biopsies , Find additional information about their disease through articles and videos,
       Communicate with essential contacts, such as physicians, the hospital, clinics etc."
                cards={cardsData}
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
                description="התערכת עוצבה בסגנון מינימליסטי, פשוט ונקי כדי לאפשר עבודה חלקה עם המערכת בזמן עבודה בשטח בנוי"
                leftImages={[
                    { src: '/img/IllanFonts.png', alt: 'Left Image 1' },
                    { src: '/img/IlanColors.png', alt: 'Left Image 2' },
                ]}
                rightImage={{ src: '/img/IlanIcons.png', alt: 'Right Image' }}
            />


            <Banner
                imageSrc="/img/asset 23.jpeg"
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




        </div>
    );
};

export default IlanShemesh;
