import React from 'react';

const WhatsAppButton = ({ phoneNumber = '972504428344', message = 'שלום! איך אפשר לעזור?' }) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="whatsapp-button">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <img src="img/whatsapp.svg" alt="WhatsApp Icon" />
            </a>
        </div>
    );
};

export default WhatsAppButton;
