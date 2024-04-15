import React from 'react';
import styled from 'styled-components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import GlobalStyle from "./global-styles";
import Home from "./Pages/Home";

const AppWrapper = styled.div`
    display: flex;
    max-width: 36rem;
    margin: 0 auto;
    padding: 6rem 2rem;
    justify-content: flex-start;
`;

export default function App() {
    return (
        <AppWrapper>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </BrowserRouter>
            <GlobalStyle/>
        </AppWrapper>
    );
}