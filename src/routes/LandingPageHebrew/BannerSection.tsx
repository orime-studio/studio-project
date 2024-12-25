
function BannerSection({ href, title, name, description, sectionClass, sideClass, variant }) {
    const handleClick = () => {
        window.location.href = href;
    }
    
    return (
        <div  className={`
            banner-section-heb 
            ${sectionClass} 
            ${variant === 'withMargin' ? 'with-margin' : ''} 
        `}
        onClick={handleClick} role="button" tabIndex={0}>
            <a
                href={href}
                target="_self"
                rel="noopener noreferrer"
                className={`content-overlay-heb ${sideClass}`}
                aria-label={title}
            >
                <div className="content-square-heb">
                    <div>
                        {title && <h3 className="ecommerce-title-heb">{title}</h3>}
                        {name && <h2 className="ecommerce-name-heb">{name}</h2>}
                        {description && <p className="ecommerce-description-heb">{description}</p>}
                    </div>
                    <div className="arrow-icon-container-heb">
                        <img src="img/Arrow.svg" alt="Arrow Icon" className="arrow-icon-heb" />
                    </div>
                </div>
            </a>
        </div>
    );
}



export default BannerSection;
