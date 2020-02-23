import styled from 'styled-components';

const Dots = styled.div.attrs(() => ({ className: 'dots' }))`
    display: flex;
    min-width: 30px;
    height: 8px;
    position: relative;

    & > div {
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${({ type, theme: { secondary: { base } } }) => (type === 'base' ? base : '#ffffff')};
        animation: dots 1.5s linear infinite;
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
    }

    @keyframes dots {
        0%, 100% {
            transform: scale(0);
        }
        45%, 55% {
            transform: scale(1);
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
    background-color: ${({
        type, theme: { secondary: { onBase } },
    }) => (type === 'base' ? onBase : 'transparent')};
`;

export {
    Dots,
    Container,
};
