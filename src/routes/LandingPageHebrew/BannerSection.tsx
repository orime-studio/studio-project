function BannerSection({ href, title, name, description, sectionClass,sideClass }) {
    return (
        <div className={`banner-section-heb ${sectionClass}`}>
            <a href={href} target="_blank" rel="noopener noreferrer" className={`content-overlay-heb ${sideClass}`}>
                <div className="content-square-heb">
                    <div>
                        <h3 className="ecommerce-title-heb">{title}</h3>
                        <h2 className="ecommerce-name-heb">{name}</h2>
                        <p className="ecommerce-description-heb">{description}</p>
                    </div>
                    <div className="arrow-icon-container-heb">
                        <img src="img/Arrow.svg" alt="Arrow Icon" className="arrow-icon-heb" />
                    </div>
                </div>
            </a>
        </div>
    );
}

export default BannerSection