import TeamMember from './TeamMember';

const AboutUs = () => {
    return (
        <section className="aboutUs-container">
            <div className="aboutUs-content">
                <h2 className="aboutUs-title">הסיפור שלנו</h2>
                <p className="aboutUs-description">
                    יש לכם רעיון מדהים, אבל לא יודעים איך להפוך אותו למציאות דיגיטלית שמוכרת?
                    <br /> 
                    גם אנחנו היינו שם.
                    <br /><br />

<p>

אנחנו צוות Orime –  
<strong> צופיה, תמר ואלכס – חברים שחיים ונושמים טכנולוגיה ועיצוב. </strong> כל אחד מאיתנו מביא את הייחודיות שלו: צופיה ותמר מפתחות Full Stack  עם תשוקה לקוד ולפתרון בעיות, ואלכס מעצב UX/UI שמאמין בכוחו של עיצוב טוב ליצור חוויית משתמש בלתי נשכחות.

                    </p>
                    <br />



                </p>
                <p className="aboutUs-description">
                התחלנו את המסע שלנו מתוך <strong> אהבה אמיתית ליצירה דיגיטלית ורצון לעזור לעסקים להגשים את החלומות שלהם. </strong>
אנחנו מאמינים שהשילוב בין טכנולוגיה לעיצוב יכול לספר את הסיפור של העסק שלכם, ליצור השפעה אמיתית <strong>ולהוביל להצלחה.</strong>

                    <br />

                    אנחנו כאן כדי להקשיב, להבין, ולבנות עבורכם פתרון דיגיטלי שמתאים בדיוק לכם.
                </p>

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
                    name="צופיה אוסדצ׳י"
                    role="Full-Stack Developer"
                    imgClass="tsofiya-img"
                    socialIcon="img/Back-End Development.svg"
                    socialAlt="Back-End Development"
                />
                <TeamMember
                    name="אלכס אוסדצ׳י"
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
