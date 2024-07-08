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

    .light {
        --clr-bg: #fcfcfc;
        --clr-bg-alt: #fff;
        --clr-fg: #555;
        --clr-fg-alt: #444;
        --clr-primary: #b029b5;
        --shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    .dark {
        --clr-bg: #23283e;
        --clr-bg-alt: #2a2f4c;
        --clr-fg: #bdbddd;
        --clr-fg-alt: #cdcdff;
        --clr-primary: #90a0d9;
        --shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
        rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }


    body {
        font-family: "Poppins", sans-serif;
        line-height: 1.5;
        color: var(--clr-fg);
        background-color: var(--clr-bg);
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

    ul {
        list-style-type: none;
    }

    .section__title {
        text-align: center;
        margin-bottom: 1em;
        text-transform: uppercase;
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

    .link {
        color: var(--clr-primary);
        padding: 0 0 0.3em 0;
        position: relative;
    }

    .link:hover {
        color: var(--clr-primary);
    }

     .link::before {
        content: "";
        display: inline;
        width: 0%;
        height: 0.2em;
        position: absolute;
        bottom: 0;
        background-color: var(--clr-primary);
        transition: width 0.2s ease-in;
    }

    .link:hover::before,
    .link:focus::before {
        width: 100%;
    }


    .link--icon {
        color: var(--clr-fg);
        font-size: 2rem;
    }

    

    


    

   
    

    @media (max-width: 900px) {
        h1 {
            font-size: 2.6rem;
        }
    }

`;