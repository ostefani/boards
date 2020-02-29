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
    font-size: 1.5em;
    font-weight: 500;
    ${({ theme: { font: { robotoMedium }, colors: { onBackground } } }) => (`
        font-family: ${robotoMedium};
        color: ${onBackground}cc;
    `)}
`;

const Description = styled.p`
    line-height: 1.6;
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
        color: ${onBackground}cc;
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
