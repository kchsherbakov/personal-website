import React, {Component, Fragment} from "react";
import {withTranslation} from "react-i18next";
import Header from './components/Header'
import Menu from './components/Menu'
import {ScrollToTop} from './components/ScrollToTop'
import {Borders} from "./components/Borders";
import {Content} from "./components/Content/Content";
import Footer from "./components/Footer";
import {StrapiDataLoader} from "./components/Providers/StrapiDataLoader";
import {Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound";
import {vars} from "./vars";

class App extends Component {
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.showHello = this.showHello.bind(this);
        this.hideHello = this.hideHello.bind(this);
        this.state = {
            menuOpen: false,
            helloVisible: false,
        }
    }

    componentDidMount() {
        const {t} = this.props;
        document.title = t('page_title');
        document.description = t('page_description');
    }

    toggleMenu() {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    showHello() {
        this.setState({
            helloVisible: true,
        })
    }

    hideHello() {
        this.setState({
            helloVisible: false,
        })
    }

    render() {
        return (
            <div
                className={`page-home ${this.state.menuOpen ? 'menu_open' : ''} ${this.state.helloVisible ? 'hello_visible' : ''}`}>
                <Header toggleMenu={this.toggleMenu}/>
                <Menu toggleMenu={this.toggleMenu}/>
                <Borders/>
                <Switch>
                    <Route exact path="/" render={() => <SPA showHello={this.showHello} hideHello={this.hideHello}/>}/>
                    <Route exact path="/resume" render={() => {
                        window.location.href = vars.static.resumeUrl;
                        return null;
                    }
                    }/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        )
    }
}

const SPA = ({showHello, hideHello}) => {
    return (
        <Fragment>
            <StrapiDataLoader/>
            <ScrollToTop/>
            <Content showHello={showHello} hideHello={hideHello}/>
            <Footer/>
        </Fragment>
    )
}

export default withTranslation()(App);