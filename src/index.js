import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n'
import {BrowserRouter} from 'react-router-dom';
import {ParallaxProvider} from "react-scroll-parallax";
import StrapiProvider from "./components/Providers/StrapiProvider";
import LoaderWrapper from "./components/LoaderWrapper";

ReactDOM.render(
    <BrowserRouter>
        <ParallaxProvider>
            <Suspense fallback={<LoaderWrapper/>}>
                <I18nextProvider i18n={i18n}>
                    <StrapiProvider>
                        <App/>
                    </StrapiProvider>
                </I18nextProvider>
            </Suspense>
        </ParallaxProvider>
    </BrowserRouter>,
    document.getElementById('app'));