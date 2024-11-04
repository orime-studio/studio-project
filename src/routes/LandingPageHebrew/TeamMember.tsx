import React from 'react';

const TeamMember = ({ name, role, imgClass, socialIcon, socialAlt }) => {
    return (
        <div className={`aboutUs-member ${imgClass}`}>
            <div className="member-info">
                <div className="member-details">
                    <h3 className="member-title">{name}</h3>
                    <p className="member-description">{role}</p>
                </div>
                <div className="member-social">
                    <img src={socialIcon} alt={socialAlt} />
                </div>
            </div>
        </div>
    );
};

export default TeamMember;
