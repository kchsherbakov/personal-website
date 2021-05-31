import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="header__nav nav">
                <a className="nav__logo" href="https://kchsherbakov.com">
                    <img src="/img/logo.svg" alt="Konstantin Chsherbakov"/>
                </a>
                <a id="menu-toggle" className="nav__menu-toggle">
                    <div className="nav__menu-toggle-icon">
                        <span className="nav__menu-toggle-icon-line"></span>
                        <span className="nav__menu-toggle-icon-line"></span>
                        <span className="nav__menu-toggle-icon-line"></span>
                    </div>
                </a>
                <ul className="nav__lang-switch __console-font">
                    <li className="nav__lang-switch-item nav__lang-switch-item_active">
                        <a href="/en">EN.</a>
                    </li>
                    <li className="nav__lang-switch-item">
                        <a href="/ru">RU.</a>
                    </li>
                </ul>
                <ul className="nav__pages __console-font">
                    <li className="nav__page-item">
                        <a className="nav__page-link" href="#about-section">About</a>
                    </li>
                    <li className="nav__page-item">
                        <a className="nav__page-link" href="#experience-section">Experience</a>
                    </li>
                    <li className="nav__page-item">
                        <a className="nav__page-link" href="#contacts-section">Contacts</a>
                    </li>
                    <li className="nav__hello-button-item">
                        <a href="/resume" target="_blank">Resume</a>
                    </li>
                </ul>
                <ul className="nav__socials">
                    <li className="nav__socials-item">
                        <a href="https://linkedin.com/in/konstantin-chsherbakov-7b2ab5128" target="_blank">
                            <img src="/img/linkedin-logo.svg" alt="LinkedIn"/>
                        </a>
                    </li>
                    <li className="nav__socials-item">
                        <a href="https://github.com/kchsherbakov" target="_blank">
                            <img src="/img/github-logo.svg" alt="GitHub"/>
                        </a>
                    </li>
                    <li className="nav__socials-item">
                        <a href="https://stackoverflow.com/users/5033823/konstantin-chsherbakov" target="_blank">
                            <img src="/img/stackoverflow-logo.svg" alt="StackOverflow"/>
                        </a>
                    </li>
                    <li className="nav__socials-item nav__socials-item_rotated">
                        <a href="mailto:k.chsherbakov@outlook.com">k.chsherbakov@outlook.com</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export {Header}