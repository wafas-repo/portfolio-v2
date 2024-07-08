import styled from 'styled-components'

export const Wrapper = styled.div`  
    padding: 2em;
    margin: 0 auto;
    text-align: center;
    border: solid 1px #b029b5;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;;
     transition: transform 0.5s ease-in-out; /* Adjusted duration and timing function */
   

   

`;

export const Content = styled.div`

    .project__description {
        margin-top: 1em;
    }

    .project__stack {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 1.2em 0;
    }

    .project__stack-item {
        margin: 0.5em;
        font-weight: 500;
        font-size: 0.8rem;
        color: var(--clr-fg-alt);
    }

    .project .link--icon {
        margin-left: 0.5em;
    }





`;


