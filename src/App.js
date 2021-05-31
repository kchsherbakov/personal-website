import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {Header} from './components/Header'

class App extends Component {
    render() {
        const {t} = this.props;
        return (
            <Header/>
        )
    }
}

export default withTranslation()(App);