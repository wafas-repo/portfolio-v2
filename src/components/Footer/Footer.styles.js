import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 3em 0;
    margin-top: 4em;
    text-align: center;

    .footer__link {
        font-size: 0.9rem;
        color: var(--clr-fg);
        font-weight: 700;
    }

    @media (max-width: 600px) {
    .footer {
        padding: 2em;
        margin-top: 3em;
    }
}
`;