import React, {Component} from "react";
import {withTranslation} from "react-i18next";

class App extends Component {
    render() {
        const {t} = this.props;
        return (
            <div>
                {t('title')}
            </div>
        )
    }
}

export default withTranslation()(App);