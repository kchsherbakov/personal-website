import React, {Component} from "react";
import {withTranslation} from "react-i18next";

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {t} = this.props;

        return (
            <div className="menu">
                <div className="menu__background"/>
                <div className="menu__container __padding">
                    <ul className="menu__lang-switch __console-font">
                        <li className="menu__lang-switch-item menu__lang-switch-item_active">
                            <a href="/en">{t('lng_en_label')}</a>
                        </li>
                        <li className="menu__lang-switch-item">
                            <a href="/ru">{t('lng_ru_label')}</a>
                        </li>
                    </ul>
                    <ul className="menu__nav menu-nav __console-font" onClick={this.props.toggleMenu}>
                        <li className="menu-nav__item">
                            <a className="menu-nav__link" href="#about-section">{t('about.title')}</a>
                        </li>
                        <li className="menu-nav__item">
                            <a className="menu-nav__link" href="#experience-section">{t('experience.title')}</a>
                        </li>
                        <li className="menu-nav__item">
                            <a className="menu-nav__link" href="#contacts-section">{t('contacts.title')}</a>
                        </li>
                        <li className="menu-nav__item">
                            <a className="menu-nav__link menu-nav__link_type_mail"
                               href="/resume" target="_blank">{t('resume')}</a>
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

export default withTranslation()(Menu)