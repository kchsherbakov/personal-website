import React from 'react';
import styled from 'styled-components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import GlobalStyle from "./global-styles";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Logo from "./Components/Logo";

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 36rem;
    margin: 0 auto;
    padding: 6rem 2rem;
    justify-content: flex-start;
`;

export default function App() {
    return (
        <AppWrapper>
            <Logo/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                </Routes>
            </BrowserRouter>
            <GlobalStyle/>
        </AppWrapper>
    );
}