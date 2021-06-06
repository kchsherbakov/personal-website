import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {StrapiContext} from "../Providers/StrapiProvider";

class Contacts extends Component {
    static contextType = StrapiContext;

    render() {
        const {t} = this.props;
        const {appdata} = this.context;

        return (
            <section id="contacts-section" className="contacts d-flex flex-column justify-content-center">
                <div className="contacts__padding __padding">
                    <div className="contacts__heading">
                        <h2 className="contacts__title __title-font">{t('contacts.title')}</h2>
                    </div>
                    <div className="contacts__content">
                        <h1 className="contacts__hello-text __title-font">{t('contacts.get_in_touch')}</h1>
                        <p className="contacts__text">
                            {appdata.contactsText}
                        </p>
                        <a className="contacts__say-hello-button" href="mailto:k.chsherbakov@outlook.com">
                            {t('contacts.say_hello')}
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default withTranslation()(Contacts)