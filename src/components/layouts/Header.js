import React from "react";
import {Link} from "react-scroll";
import Logo from "../elements/Logo";
import Footer from "./Footer";

function Header({light, logoSource, toggleMenu, headerToggler}) {
    const handleClasses = () => {
        let classes = "desktop-header-1 d-flex align-items-start flex-column";
        if (light & toggleMenu) {
            classes += " light open";
        } else if (toggleMenu) {
            classes += " open";
        } else if (light) {
            classes += " light";
        }
        return classes;
    };
    const handleMobileClasses = () => {
        let classes = "mobile-header-1";
        if (light & toggleMenu) {
            classes += " light open";
        } else if (toggleMenu) {
            classes += " open";
        } else if (light) {
            classes += " light";
        }
        return classes;
    };
    return (
        <>
            <header className={handleMobileClasses()}>
                <div className="container">
                    <div className="menu-icon d-inline-flex mr-4">
                        <button onClick={headerToggler}>
                            <span></span>
                        </button>
                    </div>
                    <Logo logoSource={logoSource}/>
                </div>
            </header>
            <header className={handleClasses()}>
                <Logo logoSource={logoSource}/>
                <nav>
                    <ul className="vertical-menu scrollspy">
                        <li>
                            <Link
                                activeClass="active"
                                to="section-home"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                <i className="icon-home"/>Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="section-about"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                <i className="icon-user-following"/>About
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="section-services"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                <i className="icon-book-open"/>Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="section-experience"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                <i className="icon-briefcase"/>Experience
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="section-education"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                <i className="icon-graduation"/>Education
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="section-works"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                <i className="icon-layers"/>Works
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="section-contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                <i className="icon-bubbles"/>Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Footer/>
            </header>
        </>
    );
}

export default Header;
