import styled from 'styled-components';

const Page = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: ${({ theme: { header: { height } } }) => (`${height}px 1fr ${height}px`)};
    grid-template-areas:
        "header"
        "content"
        "footer";
`;
const Container = styled.div`
    max-width: 1180px;
    min-width: 320px;
    margin: 0 auto;
`;

export {
    Container,
    Page,
};
