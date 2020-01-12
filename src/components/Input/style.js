import styled from 'styled-components';

const TOP = '27';

const Input = styled.input.attrs(() => ({ autoComplete: 'off' }))`
    position: relative;
    padding: ${TOP}px 16px 8px;
    border: 0;
    outline: none;
    width: 100%;
    background-color: transparent;

    ${({
        theme: {
            colors: { onBackground },
            font: { roboto },
            size: { medium },
            animation: { timing: { regular }, duration: { quick } },
        },
    }) => (`
        font-family: ${roboto};
        color: ${onBackground};
        font-size: ${medium};
        transition: transform ${quick}s ${regular};
    `)};
`;
const Container = styled.div.attrs(() => ({ className: 'container' }))`
    position: relative;
    background-color: rgba(0, 0, 0, 0.09);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.13);
        &::before {
            background-color: rgba(0, 0, 0, 0.5);
        }
    }
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 100%;
        z-index: 3;
        background-color: ${({ theme: { secondary: { base } } }) => base};
        transform: scaleX(${({ isFocused }) => (isFocused ? 1 : 0)});
        z-index: 3;
    }
    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 100%;
        z-index: 3;
        background-color: rgba(0, 0, 0, 0.3);
    }
    ${({
        theme: {
            animation: { timing: { regular }, duration: { quick } },
        },
    }) => (`
    transition: background-color ${quick}s ${regular};
        &::after {
            transition: transform ${quick}s ${regular};
        }
        &&:before {
            transition: background-color ${quick}s ${regular};
        }
        &:hover {
            transition: background-color ${quick}s ${regular};
            &::before {
                transition: background-color ${quick}s ${regular};
            }
        }
    `)};
`;
const OuterContainer = styled.div`
    position: relative;
    padding-bottom: 20px;
`;

export {
    OuterContainer,
    Container,
    Input,
};
