import ChallengeCard from "./ChallengeCard"
import './TheChallenge.scss';

const TheChallenge = ({ title, description}) => {
    return (
        <div className="the-challenge">
            
            <div className="the-challenge-cards">
                <ChallengeCard
                    imgSrc='img/Platforms.svg'
                    imgAlt='banner'
                    cardTitle='Platforms'
                    cardDescription='Mobile & Desktop' 
                    />

                <ChallengeCard
                   imgSrc='/img/ProjectTimeline.svg'
                    imgAlt='Project Timelin'
                    cardTitle='Project Timeline'
                    cardDescription='Two Months'
                     />

                <ChallengeCard
                    imgSrc='./img/ProjectType.svg'
                    imgAlt='Project Type'
                    cardTitle='Project Type'
                    cardDescription='Medical App'
                     />

                <ChallengeCard
                   imgSrc='./img/Users.svg'
                     imgAlt='Users'
                    cardTitle='Users'
                    cardDescription='Patients'
                     />

            </div>

            <div className="the-challenge-container">
                <h2 className="the-challenge-title">{title}</h2>
                <p className="the-challenge-text">{description}</p>
            </div>

        </div>
    )
}

export default TheChallenge