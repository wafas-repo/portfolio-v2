import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {

    }

    * {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        line-height: 1.5;
        
    }

    body {
        margin: 0;
        padding: 0;

    }

    h3 {
        font-size: 1.5rem;
    }

    a {
        text-decoration: none;
    }

`;