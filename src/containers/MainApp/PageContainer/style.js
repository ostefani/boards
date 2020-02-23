import styled from 'styled-components';

export default styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: 64px 1fr 64px;
    grid-template-areas:
        "header"
        "content"
        "footer";
`;
