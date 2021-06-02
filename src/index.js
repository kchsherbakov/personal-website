import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n'
import {BrowserRouter} from 'react-router-dom';
import {ParallaxProvider} from "react-scroll-parallax";

ReactDOM.render(
    <BrowserRouter>
        <Suspense fallback="Temp loading...">
            <ParallaxProvider>
                <I18nextProvider i18n={i18n}>
                    <App/>
                </I18nextProvider>
            </ParallaxProvider>
        </Suspense>
    </BrowserRouter>,
    document.getElementById('app'));