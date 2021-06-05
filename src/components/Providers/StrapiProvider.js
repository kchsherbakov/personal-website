import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import axios from "axios"

const StrapiContext = React.createContext({});

class StrapiProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: {},
            about: {},
            experience: {},
            errorLoading: false,
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        let index = axios.get(this.formatUrl('/index'));
        let experience = axios.get(this.formatUrl("/experiences"));

        axios.all([index, experience]).then(axios.spread((...responses) => {
            this.setState({
                index: responses[0].data,
                experience: responses[1].data,
            })
        })).catch(errors => {
            console.log(errors);
        })
    }

    formatUrl(endpoint) {
        return `${process.env.REACT_APP_STRAPI_HOST}${endpoint}?_locale=${this.props.i18n.language}`;
    }

    render() {
        console.log(this.props);
        return (
            <StrapiContext.Provider value={{
                index: this.state.index,
                about: this.state.about,
                experience: this.state.experience,
                errorLoading: this.state.errorLoading,
            }}>
                {this.props.children}
            </StrapiContext.Provider>
        )
    }
}

export default withTranslation()(StrapiProvider);

