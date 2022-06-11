import React from "react";

export const SocialsNavigation = () => {
    return (
        <ul className="nav__socials">
            <li className="nav__socials-item">
                <a href="https://linkedin.com/in/konstantin-chsherbakov-7b2ab5128" target="_blank"
                   rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + "/img/linkedin-logo.svg"} alt="LinkedIn"/>
                </a>
            </li>
            <li className="nav__socials-item">
                <a href="https://github.com/kchsherbakov" target="_blank" rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + "/img/github-logo.svg"} alt="GitHub"/>
                </a>
            </li>
            <li className="nav__socials-item">
                <a href="https://stackoverflow.com/users/5033823/konstantin-chsherbakov" target="_blank"
                   rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + "/img/stackoverflow-logo.svg"} alt="StackOverflow"/>
                </a>
            </li>
            <li className="nav__socials-item nav__socials-item_email">
                <a href="mailto:k.chsherbakov@outlook.com">k.chsherbakov@outlook.com</a>
            </li>
        </ul>
    )
}