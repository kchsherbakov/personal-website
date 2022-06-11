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
        const url = `${process.env.REACT_APP_STRAPI_HOST}/api/app-data?populate=experiences.orgLogo&locale=${this.props.i18n.languages[0]}`
        axios.get(url, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_STRAPI_API_TOKEN}`
            }
        }).then(response => {
            let data = response.data.data.attributes;
            this.setState({
                appdata: data,
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

