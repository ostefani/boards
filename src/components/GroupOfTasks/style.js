import styled from 'styled-components';

const Container = styled.div`
    display: block;
    padding: 8px;
    background: ${({ theme: { colors: { dark } } }) => dark + 88};
    max-width: 300px;
`;

const Header = styled.h2`
    word-wrap: break-word;
    padding-left: 8px;
    ${({ theme: { font: { robotoMedium }, colors: { onBackground }, size: { medium } } }) => (`
        font-family: ${robotoMedium};
        color: ${onBackground};
        font-size: ${medium};
    `)}
`;

export {
    Container,
    Header,
};
