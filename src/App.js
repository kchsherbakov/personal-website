import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {Header} from './components/Header'
import {Menu} from './components/Menu'
import {ScrollToTop} from './components/ScrollToTop'
import {Borders} from "./components/Borders";
import Footer from "./components/Footer";

class App extends Component {
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            menuOpen: false
        }
    }

    toggleMenu() {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    render() {
        return (
            <div className={`page-home ${this.state.menuOpen ? 'menu_open' : ''}`}>
                <Header toggleMenu={this.toggleMenu}/>
                <Menu toggleMenu={this.toggleMenu}/>
                <Borders/>
                <ScrollToTop/>
                <Footer/>
            </div>
        )
    }
}

export default withTranslation()(App);