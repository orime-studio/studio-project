import React from 'react';
import TeamMember from './TeamMember';

const AboutUs = () => {
    return (
        <section className="aboutUs-container">
            <div className="aboutUs-content">
                <h2 className="aboutUs-title">קצת עלינו</h2>
                <p className="aboutUs-description">
                    אנחנו צופיה, תמר ואלכס מסטודיו Orime – שתי מפתחות Full Stack ומעצב UX/UI. יחד, <br /> אנחנו מביאים שילוב ייחודי של מיומנויות וניסיון לתחום בניית חנויות E-commerce, אתרים ותוכנות.
                </p>
                <p className="aboutUs-description">
                    אנחנו מתמחים בפיתוח חנויות ואתרים בקוד פתוח או בפלטפורמות כמו Elementor ו-Shopify, תוך הקפדה על <br />אבטחת מידע ברמה הגבוהה ביותר, רספונסיביות, ופונקציונליות מתקדמת. המטרה שלנו היא ליצור חנויות ואתרים <br /> שנראים לא רק מצוין, אלא גם מספקים חוויית משתמש מיטבית שממקסמת את ההצלחה העסקית שלכם.
                </p>
                <p className="aboutUs-description">
                    ב-Orime, אנחנו מאמינים בשיתוף פעולה ובחדשנות, ועובדים בצמוד ללקוחותינו כדי להביא לידי ביטוי את החזון והצרכים הייחודיים שלהם. <br /> אנחנו מתחייבים לספק שירות מקצועי ואישי שיסייע לעסק שלכם לצמוח ולהצליח בעולם הדיגיטלי.
                </p>
                <p className="aboutUs-description">מוכנים לבנות משהו מדהים יחד? בואו נהפוך את הרעיונות שלכם למציאות.</p>
            </div>

            <div className="members-container">
                <TeamMember 
                    name="תמר תמם" 
                    role="Full-Stack Developer" 
                    imgClass="tamar-img" 
                    socialIcon="img/Back-End Development.svg" 
                    socialAlt="Back-End Development" 
                />
                <TeamMember 
                    name="Tsofiya Osadchi" 
                    role="Full-Stack Developer" 
                    imgClass="tsofiya-img" 
                    socialIcon="img/Back-End Development.svg" 
                    socialAlt="Back-End Development" 
                />
                <TeamMember 
                    name="Alex Osadchi" 
                    role="Product Designer (UX/UI)" 
                    imgClass="alex-img" 
                    socialIcon="img/Product & Web Design.svg" 
                    socialAlt="Product & Web Design" 
                />
            </div>
        </section>
    );
};

export default AboutUs;
