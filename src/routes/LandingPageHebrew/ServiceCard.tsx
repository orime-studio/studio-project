import React, { useRef, useEffect } from 'react';

const ServiceCard = ({ icon, title, description }) => {
    const iconRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in'); // מוסיפים את האנימציה
                    } else {
                        entry.target.classList.remove('fade-in'); // אם יוצא מהתצוגה, מסירים את האנימציה
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (iconRef.current) observer.observe(iconRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="card-heb">
            <div className="icon-circle" ref={iconRef}>
                <img src={icon} alt={`${title} Icon`} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ServiceCard;
