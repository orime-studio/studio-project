import React from 'react'

const MainBanner = () => {
    return (
        <div className="main-banner-container">
            <video autoPlay loop muted playsInline className="background-video" poster='./img/Banner View V2.jpg'>
                <source src="/img/main-banner-video.mp4" type="video/mp4" />
                הדפדפן שלך אינו תומך בווידאו.
            </video>
            <div className="right-side-banner">
                <div className="logo">
                    <img src="img/Logo-white.png" alt="orime-logo" />
                </div>
                <div className="center-text-heb">
                    <h2>מעצבים רעיונות, <br /> בונים חוויות דיגיטליות</h2>
                    <p>בונים אתרים וחנויות eCommerce שמספרים את הסיפור שלך ומניעים את הלקוחות שלך לפעולה</p>
                </div>
            </div>

            <div className="left-side-banner">
                <a href="#contactForm" className="Square-banner get-in-touch">
                    <div className="Square-banner-text">
                        <h2>בואו נדבר</h2>
                        <p>נשמח לשמוע את הרעיון שלך</p>
                    </div>

                    <div className="icon-container-heb">
                        <img src="img/Arrow.svg" alt="Arrow Icon" className="arrow-icon-heb" />
                    </div>
                </a>


                <a href="#firstProject" className="Square-banner projects">
                    <div className="Square-banner-text">
                        <h2>הפרוייקטים שלנו</h2>
                        <p>צפייה בפרוייקטים נבחרים</p>
                    </div>
                    <div className="icon-container-heb">
                        <img src="img/Arrow.svg" alt="Arrow Icon" className="arrow-icon-heb" />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default MainBanner