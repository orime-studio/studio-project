import React from 'react';
import './TheChallenge.scss';

const TheChallenge = ({ title, description, cards, isRTL = false }) => {
    return (
        <div className="the-challenge">
            <div className={`the-challenge-cards ${isRTL ? 'rtl' : 'ltr'}`}>
                {cards.map((card, index) => (
                    <div key={index} className="challenge-card">
                        <img src={card.imgSrc} alt={card.imgAlt} />
                        <h2 className="challenge-card-title">{card.cardTitle}</h2>
                        <p className="challenge-card-text">{card.cardDescription}</p>
                    </div>
                ))}
            </div>

            <div className={`the-challenge-container ${isRTL ? 'rtl' : 'ltr'}`}>
                <h2 className="the-challenge-title">{title}</h2>
                {/* <p className="the-challenge-text">{description}</p> */}
                <div className="the-challenge-text">{description}</div>

            </div>
        </div>
    );
};

export default TheChallenge;
