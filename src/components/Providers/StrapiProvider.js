import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import axios from "axios"

class StrapiProvider extends Component {
    constructor(props) {
        super(props);
        this.loadData = this.loadData.bind(this);
        this.state = {
            appdata: {},
            isLoading: true,
            errorLoading: null,
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        const url = `${process.env.REACT_APP_STRAPI_HOST}/app-data?_locale=${this.props.i18n.language}`
        axios.get(url).then(response => {
            this.setState({
                appdata: response.data,
                isLoading: false,
                errorLoading: null
            });
        }).catch(e => {
            this.setState({
                isLoading: false,
                errorLoading: e,
            })
            console.log(e);
        });
    }

    render() {
        return (
            <StrapiContext.Provider value={{
                appdata: this.state.appdata,
                isLoading: this.state.isLoading,
                errorLoading: this.state.errorLoading,
                loadData: this.loadData,
            }}>
                {this.props.children}
            </StrapiContext.Provider>
        )
    }
}

export const StrapiContext = React.createContext({});
export default withTranslation()(StrapiProvider);

