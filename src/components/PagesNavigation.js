import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {useTranslation} from "react-i18next";
import {vars} from "../vars";

export const PagesNavigation = () => {
    const {t} = useTranslation();

    return (
        <ul className="nav__pages __console-font">
            <li className="nav__page-item">
                <AnchorLink className="nav__page-link" href="#about-section">{t('about.title')}</AnchorLink>
            </li>
            <li className="nav__page-item">
                <AnchorLink className="nav__page-link" offset='100'
                            href="#experience-section">{t('experience.title')}</AnchorLink>
            </li>
            <li className="nav__page-item">
                <AnchorLink className="nav__page-link"
                            href="#contacts-section">{t('contacts.title')}</AnchorLink>
            </li>
            <li className="nav__page-item">
                <a href={vars.static.resumeUrl} target="_blank" className="nav__page-link nav__resume-link" rel="noopener noreferrer">{t('resume')}</a>
            </li>
        </ul>
    )
}