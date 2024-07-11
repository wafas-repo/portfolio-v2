import styled from "styled-components";

export const Wrapper = styled.div`

    .about {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 5em;
        height: 70vh;
    }

    @media (max-width: 600px) {
        .about {
            align-items: flex-start;
            margin-top: 2em;
        }
    }
    
`;

export const Content = styled.div`

    

    .about__role {
        margin-top: 1.2em;
    }

    .about__contact {
        margin-top: 2.4em;
        margin-bottom: 2.4em;
    }

    .about__name {
        color: var(--clr-primary);
    }

    .about .link--icon {
        margin-right: 0.8em;
    }

    .about.link--icon {
        font-size: 2rem;
    }

    .about-container {
        margin-top: 2rem;
        display: flex;
        flex-direction: row;
    }

    .about-text p {
        font-size: var(--p-font);
        font-weight: 400;
        text-align: justify;
        margin-left: 5rem;
        margin-bottom: 2rem;
        margin-top: 1rem;
    }

    .skills__list {
        width: 95%;
        display: flex;
        flex-wrap: wrap;
        margin-left: 5rem;
    }

    .skills__list-item {
        margin: 0.5em;
    }

    .btn--plain {
        text-transform: initial;
        background-color: var(--clr-bg-alt);
        box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
        border: solid 1px var(--clr-primary);
        border-radius: 10px;
        
    }

    .btn--plain:hover {
        transform: translateY(-4px);
    }

    @media (max-width: 600px) {
        .about-container {
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
        }
    }

    @media (max-width: 600px) {
        .about-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        @media (max-width: 600px) {
            .about-text p {
                margin-left: 0 !important;
            }
        }
    }

    @media (max-width: 600px) {
        .skills__list {
            margin-left: 0 !important;
        }
    }

    @media (max-width: 600px) {
        .about-img{
            display: flex;
            justify-content: center;
        }
        
    }

    




`;


export const Button = styled.button`
    

    .btn--outline {
        color: var(--clr-primary);
        border: 2px solid var(--clr-primary);
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
        background-color: var(--clr-primary);
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

export const Image = styled.img`
    height: 400px;
    border-radius: 0.8rem;

`;
