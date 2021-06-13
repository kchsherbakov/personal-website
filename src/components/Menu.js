import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {LangSwitcher} from "./LangSwitcher";
import {PagesNavigation} from "./PagesNavigation";
import {SocialsNavigation} from "./SocialsNavigation";

class Menu extends Component {
    render() {
        const {t} = this.props;

        return (
            <div className="menu">
                <div className="menu__background"/>
                <div className="menu__container __padding">
                    <div className="menu__nav nav">
                        <LangSwitcher/>
                        <PagesNavigation/>
                        <SocialsNavigation/>
                        <div className="menu__contacts">
                            <h4 className="menu__contacts-text __console-font">{t('footer.designed_by')}</h4>
                            <a className="menu__contacts-text menu__contacts-link __console-font"
                               href="mailto:k.chsherbakov@outlook.com">k.chsherbakov@outlook.com</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Menu)