import React, { useRef } from 'react'

const OurStoryMobile = () => {
    const numbersRef = useRef([]); // שמירה על רפרנס למספרים

    return (
        <div className="our-story-mobile-container">
            <h2 className='our-story-mobile-title'>המסע שלנו יחד איתך</h2>

            <div className="mobile-step-container">
                <div className="right-side-mobile">
                    <div className="step-card">
                        <span className="image-circle">
                            <img className='icon' src="img/face-happy.svg" alt="compass" />
                        </span>
                        <h3>היכרות מעמיקה</h3>
                        <p>
                            נתחיל בשיחה אישית כדי להבין את החזון, המטרות והערכים שלך. נבצע מחקר קהל יעד ומחקר שוק כדי לבנות אסטרטגיה מותאמת שתבליט אותך בשוק התחרותי.
                        </p>
                    </div>
                    <div className="step-card">
                        <span className="image-circle">
                            <img className='icon' src="img/compass.svg" alt="compass" />
                        </span>
                        <h3>פיתוח אתרים וחנויות בקוד פתוח (Full Stack)</h3>
                        <p>נאפיין במדויק את הצרכים והפונקציונליות של האתר, עם התאמה טכנית מושלמת. נתמקד בחוויית משתמש (UX) ובממשק משתמש (UI) שיעניקו למבקרים חוויה יוצאת דופן.</p>
                    </div>
                    <div className="step-card">
                        <span className="image-circle">
                            <img className='icon' src="img/Frame 6481.svg" alt="" />  
                        </span>
                        <h3>אפיון ועיצוב חוויית משתמש (UX/UI)</h3>
                        <p>נעבוד בצמוד כדי ליצור מוצר שמשלב יופי וטכנולוגיה. אנחנו נשלב את היכולות שלנו בעיצוב ופיתוח כדי להביא את הרעיון שלך לחיים. האתר יהיה מהיר, מאובטח ונגיש, עם קוד נקי ועיצוב מרהיב.</p>
                    </div>
                    <div className="step-card">
                        <span className="image-circle">
                            <img className='icon' src="img/rocket-02.svg" alt="" />
                        </span>
                        <h3>פיתוח אסטרטגיה שיווקית</h3>
                        <p>נלווה אותך בתהליך ההשקה ונוודא שהכל פועל חלק. גם לאחר מכן, אנחנו כאן בשבילך עם תמיכה ועדכונים כדי לשמור על האתר שלך תמיד צעד אחד קדימה.</p>
                    </div>
                </div>
                <div className='line-container'>

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

            </div>
        </div>
    )
}


export default OurStoryMobile