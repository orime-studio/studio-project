import React from 'react'

const MainBanner = () => {
  return (
    <div className="main-banner-container">
    <div className="right-side-banner">
        <div className="logo">
            <img src="img/Logo-white.png" alt="orime-logo" />
        </div>
        <div className="center-text-heb">
            <h2>עיצוב - פיתוח - השקה</h2>
            <p>מעצבים רעיונות, בונים פתרונות</p>
        </div>
    </div>

    <div className="left-side-banner">
        <a href="#contactForm" className="Square-banner get-in-touch">
            <div className="Square-banner-text">
                <h2>בואו נדבר</h2>
                <p>נשמח לשמוע את הרעיון שלך</p>
            </div>

            <div className="icon-container">
                <img src="img/Arrow.svg" alt="Arrow Icon" className="arrow-icon-heb" />
            </div>
        </a>


        <a href="#firstProject" className="Square-banner projects">
            <div className="Square-banner-text">
                <h2>פרוייקטים</h2>
                <p>צפייה בפרוייקטים נבחרים</p>
            </div>
            <div className="icon-container">
                <img src="img/Arrow.svg" alt="Arrow Icon" className="arrow-icon-heb" />
            </div>
        </a>
    </div>
</div>
  )
}

export default MainBanner