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
        display: flex;
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
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: fixed;
            inset: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
        }

        .nav__list-item {
            margin: 0.5em 0;
        }

        .nav__hamburger {
            display: flex;
            z-index: 2;
            margin-left: 0.8em;
        }

}

`;