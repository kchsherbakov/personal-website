import React from 'react';
import styled from 'styled-components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import GlobalStyle from "./global-styles";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Logo from "./Components/Logo";
import Experience from "./Pages/Experience";

const AppWrapper = styled.div`
    display: block;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 6rem 2rem;
    justify-content: flex-start;

    @media (min-width: 768px) {
        width: 100%;
        min-width: 512px;
        max-width: 36rem;
    }
`;

export default function App() {
    return (
        <AppWrapper>
            <ContentWrapper>
                <Logo/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/experience" element={<Experience/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </BrowserRouter>
            </ContentWrapper>
            <GlobalStyle/>
        </AppWrapper>
    );
}