import React from 'react'

const OurService = () => {
    const services = [

        {
            title: 'עיצוב מוצר ועיצוב אתרים',
            description: 'תכנון ועיצוב חוויות דיגיטליות ייחודיות, המשלבות יצירתיות, חדשנות והתאמה מלאה לצרכים הייחודיים של המותג שלך. כל עיצוב נבנה במטרה ליצור חיבור משמעותי בין המוצר לקהל היעד שלו.',
            icon: 'img/Product & Web Design.svg',
        },
        {
            title: 'UX/UI ייעוץ',
            description: 'ייעוץ מקצועי וממוקד לשיפור חוויית המשתמש, עם דגש על יצירת אינטראקציה טבעית ומזמינה. שילוב הבנה מעמיקה של הצרכים עם פתרונות מעשיים לשדרוג האפקטיביות והנגישות של המוצר שלך.',
            icon: 'img/UI Consultation.svg',
        },

        {
            title: 'פיתוח צד לקוח (Front-End)',
            description: 'פיתוח צד לקוח מתמקד ביצירת ממשקי משתמש דינאמיים ואינטראקטיביים, עם דגש על חוויית משתמש חלקה, טבעית ומותאמת לכל מכשיר. הפיתוח משלב עיצוב מתקדם עם קוד איכותי, על מנת לספק ביצועים מעולים והתאמה מלאה לצרכים של משתמשי הקצה.',
            icon: 'img/Front-End Development.svg',
        },

        {
            title: 'פיתוח צד שרת (Back-End)',
            description: 'בניית תשתיות חזקות ומאובטחות שמתפקדות בצורה מושלמת מאחורי הקלעים, כך שהמערכת שלך תוכל להציע שירות חלק ומהיר למשתמשים. התאמה אישית לכל צורך כדי להבטיח פתרונות טכנולוגיים יציבים ואמינים.',
            icon: 'img/Back-End Development.svg',
        },

        {
            title: 'פיתוח חנויות Shopify',
            description: 'צירת חנויות Shopify שמספרות את סיפור המותג שלך ויוצרות חוויית קנייה ייחודית ואינטואיטיבית. כל חנות נבנית בהתאמה אישית כדי לשקף את הערכים שלך ולמשוך את הלקוחות הנכונים.',
            icon: 'img/Shopify Store Development.svg',
        },
        {
            title: 'WordPress ו-Elementor',
            description: 'עיצוב ופיתוח אתרים מתקדמים ב-WordPress עם Elementor, המאפשרים לך לשלוט בקלות בתוכן ולהתאים אותו לצרכים שלך. כל אתר מעוצב בקפידה כדי לשדר אמינות, נראות מרשימה, וגמישות מלאה בניהול.',
            icon: 'img/WordPress & Elementor.svg',
        },

    ];
    return (

        <div className="services-section-heb">
            <div className="right-side-heb">
                <div className="cards-container-heb">
                    {services.map((service, index) => (
                        <div className="card-heb" key={index}>
                            <div className="icon-circle">
                                <img src={`${service.icon}`} alt={`${service.title} Icon`} />
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="left-side-heb">
                <p className="description-heb">
                    הפכו את הרעיונות שלכם למציאות בעזרת עיצוב ופיתוח חדשניים, שמקדמים את המותג שלכם קדימה
                </p>
                <a href="#contactForm" className="gold-button">ספרו לנו על הפרויקט שלכם</a>
            </div>
        </div>
    )
}

export default OurService