import styled from 'styled-components';

export default styled.div.attrs({ className: 'ripple' })`
    display: block;
    position: absolute;
    border-radius: 50%;
    z-index: 0;
    pointer-events: none;
    opacity: 0;
    transform: scale(0);
    will-change: transform, animation;
    ${({
        ripple: { width, posX, posY },
        theme: {
            secondary: { light },
            animation: { duration: { regular }, timing: { regular: ease } },
        },
    }) => {
        const rippleWidth = width + Math.abs(width / 2 - posX) * 2;
        return (`
            width: ${rippleWidth}px;
            height: ${rippleWidth}px;
            top: ${posY - rippleWidth / 2}px;
            left: ${posX - rippleWidth / 2}px;
            background: ${light};
            animation: ripple ${regular}s ${ease};
        `);
    }};
    @keyframes ripple {
        0% {
            opacity: 0.35;
            transform: scale(0);
        }
        30% {
            opacity: 0.2;
        }
        100% {
            opacity: 0.3;
            transform: scale(1);
        }
    }
`;
