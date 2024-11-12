import React from 'react';
import ServiceCard from './ServiceCard';

const OurServiceN = () => {
    return (
        <div className="services-section-heb">
            <div className="title">
                <h2 className="services-title">מה תקבלו אצלינו</h2>
            </div>
            <div className="cards">
                <div className="cards-container-heb">
                    <ServiceCard

                        icon="img/Front-End Development.svg"
                        title="פיתוח אסטרטגיה שיווקית"
                        description="אנחנו מתמחים ביצירת חנויות אונליין שמוכרות באמת. אנו משלבים בין הבנה שיווקית עמוקה לבין פיתוח, כדי ליצור חנות שמושכת את הלקוחות הנכונים ומעודדת אותם לבצע רכישה. נתמקד באסטרטגיה שמטרתה להגדיל את המכירות שלך, באמצעות עיצוב מושך, חוויית משתמש חלקה והנעה לפעולה ברורה."
                    />
                    <ServiceCard

                        icon="img/Product & Web Design.svg"
                        title="אפיון ועיצוב חוויית משתמש (UX/UI)"
                        description="ניצור עבורך חוויית משתמש פשוטה ונעימה, שתגרום למבקרים באתר או באפליקציה שלך להרגיש בנוח. באמצעות אפיון מדויק ועיצוב ידידותי, נדאג שהמוצר הדיגיטלי שלך יהיה קל לשימוש, אסתטי ומשקף את הערכים והחזון שלך."
                    />
                    <ServiceCard

                        icon="img/Back-End Development.svg"
                        title="פיתוח אתרים וחנויות בקוד פתוח (Full Stack)"
                        description="אנחנו מתמחים בפיתוח אתרים וחנויות אונליין בטכנולוגיות קוד פתוח, עם יכולות פולסטק מלאות. נבנה עבורך פתרון טכנולוגי חזק וגמיש, שמותאם לצרכים הייחודיים שלך ויכול לצמוח יחד עם העסק שלך. נדאג שהאתר שלך יהיה מהיר, מאובטח ומוכן לקידום."
                    />
                    <ServiceCard

                        icon="img/Shopify Store Development.svg"
                        title="פיתוח בפלטפורמות (Shopify & Elementor)"
                        description="אם אתה מחפש פתרון יעיל ומהיר, אנחנו מומחים בפיתוח חנויות ואתרים באמצעות Shopify ו-Elementor. נתאים את הפלטפורמה לצרכים שלך, נעצב את האתר כך שישקף את המותג והסיפור שלך, ונבטיח שהוא יהיה נגיש, מהיר ומוכן לעבודה."
                    />
                </div>
            </div>
            <div className="button-container">
                <a href="#contactForm" className="gold-button">ספרו לנו על הפרוייקט שלכם</a>
            </div>
        </div>
    );
};

export default OurServiceN;
