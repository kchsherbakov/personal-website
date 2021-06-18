import React, {Component} from "react";
import {withTranslation} from "react-i18next";

class Footer extends Component {
    render() {
        const {t} = this.props;
        return (
            <footer className="footer container-fluid d-flex flex-column justify-content-center">
                <h4 className="footer__text __console-font">{t('footer.designed_by')}</h4>
                <a className="footer__text footer__link __console-font"
                   href="mailto:k.chsherbakov@outlook.com">k.chsherbakov@outlook.com</a>
            </footer>
        )
    }
}

export default withTranslation()(Footer)