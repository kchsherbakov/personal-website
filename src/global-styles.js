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
        padding: 0;
        margin: 0;
    }

    *, ::after, ::before {
        box-sizing: border-box;
    }

    p {
        padding: inherit;
        margin: inherit;
    }

    a {
        color: inherit;
        text-decoration: inherit;
    }

    .flex {
        display: flex;
    }

    .flex-col {
        flex-direction: column;
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

    .gap-2 {
        row-gap: 2rem;
        column-gap: 2rem;
    }

    .gap-3 {
        row-gap: 3rem;
        column-gap: 3rem;
    }

    .flex-w-fit {
        width: fit-content;
    }

    .hover-text-black {
        &:hover {
            color: #000;
        }
    }

    .transition {
        transition-duration: .3s;
        transition-property: color, background-color;
        transition-timing-function: cubic-bezier(.4, 0, .2, 1);
    }
`;

export default GlobalStyle;