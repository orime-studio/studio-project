import React, { useRef, useEffect, useState } from "react";

const OurStoryMobile = () => {
  const numbersRef = useRef([]); // Reference for the numbers
  const [activeIndex, setActiveIndex] = useState(null); // State to track the active number

  useEffect(() => {
    const handleScroll = () => {
      numbersRef.current.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if the element is within the viewport's middle range
          if (rect.top >= window.innerHeight * 0.3 && rect.top <= window.innerHeight * 0.7) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="our-story-mobile-container">
      <h2 className="our-story-mobile-title">המסע שלנו יחד איתך</h2>

      <div className="mobile-step-container">
        <div className="right-side-mobile">
          <div className="step-card">
            <span className="image-circle">
              <img className="icon" src="img/face-happy.svg" alt="compass" />
            </span>
            <h3>היכרות מעמיקה</h3>
            <p>
              נתחיל בשיחה אישית כדי להבין את החזון, המטרות והערכים שלך. נבצע מחקר קהל יעד ומחקר שוק כדי לבנות אסטרטגיה מותאמת שתבליט אותך בשוק התחרותי.
            </p>
          </div>
          <div className="step-card">
            <span className="image-circle">
              <img className="icon" src="img/compass.svg" alt="compass" />
            </span>
            <h3>פיתוח אתרים וחנויות בקוד פתוח (Full Stack)</h3>
            <p>
              נאפיין במדויק את הצרכים והפונקציונליות של האתר, עם התאמה טכנית מושלמת. נתמקד בחוויית משתמש (UX) ובממשק משתמש (UI) שיעניקו למבקרים חוויה יוצאת דופן.
            </p>
          </div>
          <div className="step-card">
            <span className="image-circle">
              <img className="icon" src="img/Frame 6481.svg" alt="" />
            </span>
            <h3>אפיון ועיצוב חוויית משתמש (UX/UI)</h3>
            <p>
              נעבוד בצמוד כדי ליצור מוצר שמשלב יופי וטכנולוגיה. אנחנו נשלב את היכולות שלנו בעיצוב ופיתוח כדי להביא את הרעיון שלך לחיים. האתר יהיה מהיר, מאובטח ונגיש, עם קוד נקי ועיצוב מרהיב.
            </p>
          </div>
          <div className="step-card">
            <span className="image-circle">
              <img className="icon" src="img/rocket-02.svg" alt="" />
            </span>
            <h3>פיתוח אסטרטגיה שיווקית</h3>
            <p>
              נלווה אותך בתהליך ההשקה ונוודא שהכל פועל חלק. גם לאחר מכן, אנחנו כאן בשבילך עם תמיכה ועדכונים כדי לשמור על האתר שלך תמיד צעד אחד קדימה.
            </p>
          </div>
        </div>
        <div className="line-container">
          <img className="line" src="img/line.svg" alt="line" />
          {[1, 2, 3, 4].map((num, index) => (
            <p
              key={index}
              className={`number num${num} ${activeIndex === index ? "active" : ""}`}
              ref={(el) => (numbersRef.current[index] = el)}
            >
              {num}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStoryMobile;
