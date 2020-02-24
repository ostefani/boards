import styled from 'styled-components';

const Header = styled.h3`
    margin: 0;
    font-weight: normal;
    margin-bottom: 16px;
    word-wrap: break-word;
    ${({
        theme: {
            colors: { onBackground },
            font: { roboto },
            size: { small },
        },
    }) => (`
            color: ${onBackground}
            font-family: ${roboto};
            font-size: ${small};
    `)}
`;

const Button = styled.button`
    outline: none;
    border: none;
    padding: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: transparent;
    cursor: pointer;
    ${({
        theme: {
            colors: { dark },
        },
    }) => (`
            &:hover {
                background: ${dark}33;
            }

    `)}
`;

const DateComponent = styled.span`
    ${({
        theme: {
            colors: { onBackground },
            font: { roboto },
            size: { tiny },
        },
    }) => (`
            color: ${onBackground}
            font-family: ${roboto};
            font-size: ${tiny};

    `)}
`;

const TaskContainer = styled.div`
    position: relative;
    width: 200px;
    padding: 16px;
`;

export {
    Header,
    Button,
    TaskContainer,
    DateComponent,
};
