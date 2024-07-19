import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    bottom: 1em;
    right: 2em;
    background-color: transparent;
    font-size: 30px;

    a {
        color: inherit;
    }

    @media (max-width: 900px) {
        .scroll-top {
            display: none;
        }
    }
`;