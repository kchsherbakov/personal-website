import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        height: 100%;
        width: 100%;
        line-height: 1.5;
        font-size: 16px;
        font-family: ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
        background-color: #fff;
    }
    a {
        color: inherit;
        text-decoration: inherit;
    }
    
    .text-gray-400 {
        color: #9CA3AF;
    }
    
    .text-gray-600 {
        color: #4B5563;
    }
    
    .gap-1 {
        row-gap: 1rem;
        column-gap: 1rem;
    }
    
    .gap-3 {
        row-gap: 3rem;
        column-gap: 3rem;
    }
`;

export default GlobalStyle;