import styled from "styled-components";

export const Wrapper = styled.div`
    
    
    margin-top: 5em;

    .contact--section {
        align-items: center;
        display: flex;
        flex-direction: column;
    }

`;

export const Content = styled.div`
    
    
    
    
`;

export const Button = styled.button`
    

    .btn--outline {
        color: #b029b5;
        border: 2px solid #b029b5;
        position: relative;
        overflow: hidden;
        z-index: 1;
    }

    .btn--outline:focus,
    .btn--outline:hover {
        color: var(--clr-bg);
    }

    .btn--outline:before {
    content: "";
        position: absolute;
        background-color: #b029b5;
        right: 100%;
        bottom: 0;
        left: 0;
        top: 0;
        z-index: -1;
        transition: right 0.2s ease-in-out;
    }

    .btn--outline:hover::before,
    .btn--outline:focus::before {
        right: 0;
    }

`;




