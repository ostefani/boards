import styled from 'styled-components';

const Button = styled.button.attrs({ className: 'button' })`
    min-height: 40px;
    position: relative;
    display: inline-flex;
    outline: none;
    border: none;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    ${({
        isFullWidth,
        isText,
        theme: {
            secondary: { base, onBase, dark, light },
            radius: { regular },
            font: { roboto },
            size: { small },
            shadow: { primary, onActive },
            animation: { timing: { regular: ease }, duration: { quick } },
        },
    }) => (`
            min-width: ${isFullWidth ? '100%' : '144px'};
            box-shadow: ${primary};
            background-color: ${isText ? onBase : base};
            color: ${isText ? base : onBase}
            border-radius: ${regular};
            font-family: ${roboto};
            font-size: ${small};
            transition: box-shadow ${quick}s ${ease};
            &:hover {
                box-shadow: ${onActive};
                background-color: ${isText ? light : dark};
                transition: box-shadow ${quick}s ${ease};
            }
            &:focus {
                background-color: ${isText ? light : dark};
                transition: box-shadow ${quick}s ${ease};
            }
            `)};
`;
const Text = styled.span`
    z-index: 1;
`;
const RippleContainer = styled.div`
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${({ theme: { radius: { regular } } }) => regular};
    z-index: 0;
`;
const Ripple = styled.div`
    display: block;
    position: absolute;
    border-radius: 50%;
    z-index: 0;
    pointer-events: none;
    opacity: 0;
    transform: scale(0);
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

export {
    Button, Ripple, RippleContainer, Text,
};
