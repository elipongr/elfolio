import React, {useState} from "react";
import FsLightbox from "fslightbox-react";

function Portfolio({portfolio}) {
    const {category, title, image, popupLink, link} = portfolio;
    const [toggler, setToggler] = useState(false);

    const handleLightbox = (e) => {
        if (!link) {
            e.preventDefault();
            setToggler(!toggler);
        }
    };

    const handleIcon = () => {
        if (link) {
            return <i className="icon-link"/>;
        } else if (popupLink) {
            if (popupLink.length > 1) {
                if (popupLink.toString().match(/youtube/g)) {
                    return <i className="icon-camrecorder"/>;
                }
                return <i className="icon-picture"/>;
            } else if (popupLink.toString().match(/youtube/g)) {
                return <i className="icon-camrecorder"/>;
            } else {
                return <i className="icon-magnifier-add"/>;
            }
        }
        return <i className="icon-magnifier-add"/>;
    };
    return (
        <>
            <a
                href={link ? link : "!#"}
                className="work-image"
                onClick={handleLightbox}
            >
                <div className="portfolio-item rounded shadow-dark">
                    <div className="details">
                        <span className="term text-capitalize">{category}</span>
                        <h4 className="title">{title}</h4>
                        <span className="more-button">{handleIcon()}</span>
                    </div>
                    <div className="thumb">
                        <img src={image} alt="Portfolio-title"/>
                        <div className="mask"/>
                    </div>
                </div>
            </a>
            {popupLink && <FsLightbox toggler={toggler} sources={popupLink}/>}
        </>
    );
}

export default Portfolio;
