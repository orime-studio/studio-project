import React from 'react'
import './ChallengeCard.scss';

const ChallengeCard = ({ imgSrc, imgAlt, cardTitle, cardDescription }) => {
    return (

        <div className="challenge-card">
            <img src={imgSrc} alt={imgAlt} />
            <h2 className="challenge-card-title">{cardTitle}</h2>
            <p className="challenge-card-text">{cardDescription}</p>
        </div>

    )
}

export default ChallengeCard