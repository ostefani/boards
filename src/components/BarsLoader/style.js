import styled from 'styled-components';

const Bars = styled.div.attrs(() => ({ className: 'bars' }))`
    display: flex;
    min-width: 54px;
    height: 8px;
    position: relative;

    & > div {
        position: absolute;
        width: 8px;
        height: 8px;

        animation: bars 2s linear infinite;
        &:nth-child(1) {
            left: 0;
        }
        &:nth-child(2) {
            left: 11px;
            animation-delay: 0.2s;
        }
        &:nth-child(3) {
            left: 22px;
            animation-delay: 0.3s;
        }
        &:nth-child(4) {
            left: 33px;
            animation-delay: 0.4s;
        }
        &:nth-child(5) {
            left: 44px;
            animation-delay: 0.5s;
        }
    }

    @keyframes bars {
        0% {
            background: ${({ theme: { secondary: { base } } }) => base};
        }
        100% {
            background: #ffffff;
        }
    }
`;
const Container = styled.div.attrs(() => ({ className: 'loader' }))`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 10;
    background-color: #ababab;
`;

export {
    Bars,
    Container,
};
