import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import Header from './components/Header'
import Menu from './components/Menu'
import {ScrollToTop} from './components/ScrollToTop'
import {Borders} from "./components/Borders";
import {Content} from "./components/Content/Content";
import Footer from "./components/Footer";

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
                <ScrollToTop/>
                <Content showHello={this.showHello}
                         hideHello={this.hideHello}/>
                <Footer/>
            </div>
        )
    }
}

export default withTranslation()(App);