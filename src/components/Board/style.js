import styled from 'styled-components';

const Header = styled.h1`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 40px 0;
    padding-left: 16px;
    ${({
        theme: {
            colors: { onBackground },
            font: { roboto },
            size: { large },
        },
    }) => (`
            color: ${onBackground}cc;
            font-family: ${roboto};
            font-size: ${large};

    `)}
`;

const Container = styled.div`
    width: 100%;
`;
const GroupContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-auto-columns: 300px;
    grid-auto-flow: column;
    overflow: scroll;
    height: ${({ theme: { header: { height } } }) => (`calc(100vh - ${height * 2}px - 118px)`)};
    width: 100%;
    align-items: start;
    grid-column-gap: 8px;
`;

export {
    Header,
    Container,
    GroupContainer,
};
