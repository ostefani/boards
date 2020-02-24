import styled from 'styled-components';

const Overlay = styled.div.attrs(() => ({ className: 'overlay' }))`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.64);
    z-index: 10;
`;

const ContentContainer = styled.div`
    padding: 48px;
    width: 768px;
    ${({ theme: { colors: { onBackground, background }, radius: { secondary } } }) => (`
        color: ${onBackground};
        border-radius: ${secondary};
        background: ${background};
    `)}
`;

const Header = styled.h3`
    margin: 0;
    ${({ theme: { font: { robotoMedium }, colors: { onBackground }, size: { large } } }) => (`
        font-family: ${robotoMedium};
        color: ${onBackground};
        font-size: ${large};
    `)}
`;

const Description = styled.p`
    margin: 32px 0 32px 0;
    ${({ theme: { font: { roboto }, colors: { onBackground }, size: { medium } } }) => (`
        font-family: ${roboto};
        color: ${onBackground};
        font-size: ${medium};
    `)}
`;

const DateComponent = styled.p`
    margin: 0;
    ${({ theme: { font: { roboto }, colors: { onBackground }, size: { medium } } }) => (`
        font-family: ${roboto};
        color: ${onBackground};
        font-size: ${medium};
    `)}
`;

export {
    Overlay,
    ContentContainer,
    Header,
    Description,
    DateComponent,
};
