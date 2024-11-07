import React, { useEffect, useRef } from 'react'

const OurServiceN = () => {
    const services = [

        {
            title: 'פיתוח אסטרטגיה שיווקית',
            description: 'אנחנו מתמחים ביצירת חנויות אונליין שמוכרות באמת. אנו משלבים בין הבנה שיווקית עמוקה לבין פיתוח, כדי ליצור חנות שמושכת את הלקוחות הנכונים ומעודדת אותם לבצע רכישה. נתמקד באסטרטגיה שמטרתה להגדיל את המכירות שלך, באמצעות עיצוב מושך, חוויית משתמש חלקה והנעה לפעולה ברורה.',
            icon: 'img/Front-End Development.svg',
        },
        {
            title: 'אפיון ועיצוב חוויית משתמש (UX/UI)',
            description: 'ניצור עבורך חוויית משתמש פשוטה ונעימה, שתגרום למבקרים באתר או באפליקציה שלך להרגיש בנוח. באמצעות אפיון מדויק ועיצוב ידידותי, נדאג שהמוצר הדיגיטלי שלך יהיה קל לשימוש, אסתטי ומשקף את הערכים והחזון שלך.',
            icon: 'img/Product & Web Design.svg',
        },
        {
            title: 'פיתוח אתרים וחנויות בקוד פתוח (Full Stack)',
            description: 'אנחנו מתמחים בפיתוח אתרים וחנויות אונליין בטכנולוגיות קוד פתוח, עם יכולות פולסטק מלאות. נבנה עבורך פתרון טכנולוגי חזק וגמיש, שמותאם לצרכים הייחודיים שלך ויכול לצמוח יחד עם העסק שלך. נדאג שהאתר שלך יהיה מהיר, מאובטח ומוכן לקידום.',
            icon: 'img/Front-End Development.svg',
        },
        {
            title: 'פיתוח בפלטפורמות (Shopify & Elementor)',
            description: 'אם אתה מחפש פתרון יעיל ומהיר, אנחנו מומחים בפיתוח חנויות ואתרים באמצעות Shopify ו-Elementor. נתאים את הפלטפורמה לצרכים שלך, נעצב את האתר כך שישקף את המותג והסיפור שלך, ונבטיח שהוא יהיה נגיש, מהיר ומוכן לעבודה.',
            icon: 'img/Shopify Store Development.svg',
        },
    ];

  
    const iconRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        iconRefs.current.forEach((icon) => {
            if (icon) observer.observe(icon);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="services-section-heb">
            <div className="title">
                <h2 className="services-title">מה תקבלו אצלינו</h2>
            </div>
            <div className="cards">
                <div className="cards-container-heb">
                    {services.reverse().map((service, index) => (
                        <div className="card-heb" key={index}>
                            <div
                                className="icon-circle"
                                ref={(el) => (iconRefs.current[index] = el)}
                            >
                                <img src={`${service.icon}`} alt={`${service.title} Icon`} />
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="button-container">
                <a href="#contactForm" className="gold-button">ספרו לנו על הפרוייקט שלכם</a>
            </div>
        </div>
    );
};

export default OurServiceN;