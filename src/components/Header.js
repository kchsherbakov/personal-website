import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {LangSwitcher} from "./LangSwitcher";
import {PagesNavigation} from "./PagesNavigation";
import {SocialsNavigation} from "./SocialsNavigation";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__nav nav">
                    <a className="nav__logo" href="/">
                        <img src={process.env.PUBLIC_URL + "/img/logo.svg"} alt="Konstantin Chsherbakov"/>
                    </a>
                    <a id="menu-toggle" className="nav__menu-toggle" onClick={this.props.toggleMenu}>
                        <div className="nav__menu-toggle-icon">
                            <span className="nav__menu-toggle-icon-line"/>
                            <span className="nav__menu-toggle-icon-line"/>
                            <span className="nav__menu-toggle-icon-line"/>
                        </div>
                    </a>
                    <LangSwitcher/>
                    <PagesNavigation/>
                    <SocialsNavigation/>
                </div>
            </header>
        );
    }
}

export default withTranslation()(Header)