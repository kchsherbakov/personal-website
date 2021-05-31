import React, {Component} from "react";

class Menu extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="menu">
                <div className="menu__background"></div>
                <div className="menu__container __padding">
                    <ul className="menu__lang-switch __console-font">
                        <li className="menu__lang-switch-item menu__lang-switch-item_active">
                            <a href="/en">EN.</a>
                        </li>
                        <li className="menu__lang-switch-item">
                            <a href="/ru">RU.</a>
                        </li>
                    </ul>
                    <ul className="menu__nav menu-nav __console-font" onClick={this.props.toggleMenu}>
                        <li className="menu-nav__item">
                            <a className="menu-nav__link" href="#about-section">About</a>
                        </li>
                        <li className="menu-nav__item">
                            <a className="menu-nav__link" href="#experience-section">Experience</a>
                        </li>
                        <li className="menu-nav__item">
                            <a className="menu-nav__link" href="#contacts-section">Contacts</a>
                        </li>
                        <li className="menu-nav__item">
                            <a className="menu-nav__link menu-nav__link_type_mail"
                               href="/resume" target="_blank">Resume</a>
                        </li>
                    </ul>
                    <ul className="menu__socials">
                        <li className="menu__socials-item">
                            <a href="https://linkedin.com/in/konstantin-chsherbakov-7b2ab5128" target="_blank">
                                <img src="/img/linkedin-logo.svg" alt="LinkedIn"/>
                            </a>
                        </li>
                        <li className="menu__socials-item">
                            <a href="https://github.com/kchsherbakov" target="_blank">
                                <img src="/img/github-logo.svg" alt="GitHub"/>
                            </a>
                        </li>
                        <li className="menu__socials-item">
                            <a href="https://stackoverflow.com/users/5033823/konstantin-chsherbakov" target="_blank">
                                <img src="/img/stackoverflow-logo.svg" alt="StackOverflow"/>
                            </a>
                        </li>
                    </ul>
                    <div className="menu__contacts">
                        <h4 className="menu__contacts-text __console-font">Designed & Build by Konstantin
                            Chsherbakov</h4>
                        <a className="menu__contacts-text menu__contacts-link __console-font"
                           href="mailto:k.chsherbakov@outlook.com">k.chsherbakov@outlook.com</a>
                    </div>
                </div>
            </div>
        );
    }
}

export {Menu}