import { styled } from "styled-components";

export const Wrapper = styled.div`
 
`;

export const Content = styled.div`

    display: flex;
    align-items: center;

    ul {
        list-style-type: none;
    }
    .centre {
        display: flex;
        align-items: center;
    }

    .nav__hamburger {
        display: none;
    }

    .nav__list {
        margin-right: 1.5em;
        display: none;
    }

    .nav__list-item {
        margin-left: 1.5em;
    }

    .link--nav {
        color: var(--clr-fg);
        text-transform: lowercase;
        font-weight: 500;
    }

    .nav__theme {
        margin-top: 0.4em;
    }

    .btn--icon {
        padding: 0;
        font-size: 1.2rem;
    }

    @media (max-width: 600px) {

        .nav__list {
            display: flex !important;
            flex-direction: column;
            align-items: center;
            padding: 4em 0;
            position: absolute;
            right: 0;
            left: 0;
            top: 5em;
            background-color: var(--clr-bg);
            width: 0;
            overflow: hidden;
            transition: width 0.2s ease-in-out;
        }

        .display-nav-list {
            width: 100%;
        }
        

        .nav__list-item {
            margin: 0.5em 0;
        }

        .nav__hamburger {
            display: flex;
            margin-left: 0.8em;
        }

}

`;