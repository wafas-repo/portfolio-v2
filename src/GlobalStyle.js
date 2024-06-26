import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        border: 0;
        outline: 0;
        background-color: inherit;
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        box-shadow: none;
        box-sizing: border-box;
        
    }

    body {
        font-family: "Poppins", sans-serif;
        line-height: 1.5;
        /* color: var(--clr-fg);
        background-color: var(--clr-bg); */
        max-width: 1100px;
        width: 95%;
        margin: 0 auto;
    }

    .btn {

        display: block;
        padding: 0.8em 1.4em;
        font-weight: 500;
        font-size: 0.9rem;
        text-transform: lowercase;
        transition: transform 0.2s ease-in-out;

    }

    h1,
    h2,
    h3,
    h4 {
    line-height: 1.2;
    /* color: var(--clr-fg-alt); */
    }

    html {
        scroll-behavior: smooth;
    }

    h1 {
        font-size: 4rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    h4 {
        font-size: 1.3rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    @media (max-width: 900px) {
        h1 {
            font-size: 2.6rem;
        }
    }

`;