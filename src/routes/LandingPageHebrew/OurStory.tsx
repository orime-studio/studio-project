import React, { useEffect, useRef } from 'react';

const OurStory = () => {
    const numbersRef = useRef([]); // שמירה על רפרנס למספרים

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // הסר את המחלקה 'active' מכל המספרים
                        numbersRef.current.forEach((number) => {
                            number.classList.remove('active');
                        });
                        // הוסף 'active' רק למספר הנוכחי
                        entry.target.classList.add('active');
                    }
                });
            },
            {
                threshold: 0.5, // האלמנט צריך להיות לפחות 50% גלוי
            }
        );

        numbersRef.current.forEach((number) => observer.observe(number)); // מעקב אחרי המספרים

        return () => observer.disconnect(); // ניקוי האובזרבר בעת עזיבת הקומפוננטה
    }, []);

    return (
        <div className="our-story-container">
            <h2 className="our-story-title">המסע שלנו יחד איתך</h2>

            <div className="step-container">
                <div className="step-right-side">
                    <div className="step-card right num2">
                        <span className="image-circle">
                            <img className='icon' src="img/compass.svg" alt="compass" />
                        </span>
                        <h3>פיתוח אתרים וחנויות בקוד פתוח (Full Stack)</h3>
                        <p>
                            נאפיין במדויק את הצרכים והפונקציונליות של האתר, עם התאמה
                            טכנית מושלמת. נתמקד בחוויית משתמש (UX) ובממשק משתמש (UI)
                            שיעניקו למבקרים חוויה יוצאת דופן.
                        </p>
                    </div>
                    <div className="step-card right num4">
                        <span className="image-circle">
                            <img className='icon' src="img/rocket-02.svg" alt="" />
                        </span>
                        <h3>פיתוח אסטרטגיה שיווקית</h3>
                        <p>
                            נלווה אותך בתהליך ההשקה ונוודא שהכל פועל חלק. גם לאחר מכן,
                            אנחנו כאן בשבילך עם תמיכה ועדכונים כדי לשמור על האתר שלך
                            תמיד צעד אחד קדימה.
                        </p>
                    </div>
                </div>

                <div className="step-center">
                    <img className='line' src="img/line.svg" alt="line" />
                    <p
                        className="number num1"
                        ref={(el) => (numbersRef.current[0] = el)}
                    >
                        1
                    </p>
                    <p
                        className="number num2"
                        ref={(el) => (numbersRef.current[1] = el)}
                    >
                        2
                    </p>
                    <p
                        className="number num3"
                        ref={(el) => (numbersRef.current[2] = el)}
                    >
                        3
                    </p>
                    <p
                        className="number num4"
                        ref={(el) => (numbersRef.current[3] = el)}
                    >
                        4
                    </p>
                </div>

                <div className="step-left-side">
                    <div className="step-card left num1">
                        <span className="image-circle">
                            <img className='icon' src="img/face-happy.svg" alt="compass" />
                        </span>
                        <h3>היכרות מעמיקה</h3>
                        <p>
                            נתחיל בשיחה אישית כדי להבין את החזון, המטרות והערכים שלך.
                            נבצע מחקר קהל יעד ומחקר שוק כדי לבנות אסטרטגיה מותאמת
                            שתבליט אותך בשוק התחרותי.
                        </p>
                    </div>
                    <div className="step-card left num3">
                        <span className="image-circle">
                            <img className='icon' src="img/Frame 6481.svg" alt="" />
                        </span>
                      <h3>אפיון ועיצוב חוויית משתמש (UX/UI)</h3>
                   <p>נעבוד בצמוד כדי ליצור מוצר שמשלב יופי וטכנולוגיה. אנחנו נשלב את היכולות שלנו בעיצוב ופיתוח כדי להביא את הרעיון שלך לחיים. האתר יהיה מהיר, מאובטח ונגיש, עם קוד נקי ועיצוב מרהיב.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStory;
