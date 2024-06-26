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

}

`;