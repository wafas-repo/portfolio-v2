import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 5em;
   

    .project:hover {
        transform: translateY(-4px);
    }


    
`;

export const Content = styled.div`
    .projects__grid {
            max-width: 1100px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
            grid-gap: 2em;
    }

`;
