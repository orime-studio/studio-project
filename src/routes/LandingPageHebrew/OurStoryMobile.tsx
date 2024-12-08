import React, { useRef, useEffect, useState } from "react";

const OurStoryMobile = () => {
  const numbersRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      numbersRef.current.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          // בדוק אם האלמנט מופיע באמצע המסך
          if (rect.top >= window.innerHeight * 0.3 && rect.top <= window.innerHeight * 0.7) {
            setActiveIndex(index); // קבע את האלמנט כפעיל
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
          {/* הקלפים */}
          {/* תוכן של הקלפים */}
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
