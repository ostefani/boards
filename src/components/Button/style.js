import styled from 'styled-components';

const Button = styled.button.attrs({ className: 'button' })`
    position: relative;
    display: flex;
    outline: none;
    border: none;
    justify-content: center;
    padding: 8px 24px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    margin-top: 200px;
    transition: box-shadow 0.1s ease;
    ${({
        size,
        theme: {
            secondary: { base, onBase, light },
            radius: { regular },
            font: { roboto },
            size: { small },
            shadow: { primary, onActive },
        },
    }) => (`
            min-width: ${size === 'isFullWidth' ? '100%' : '144px'};
            box-shadow: ${primary};
            border: 2px solid ${base};
            background-color: ${base};
            color: ${onBase}
            border-radius: ${regular};
            font-family: ${roboto};
            font-size: ${small};
            &:hover {
                box-shadow: ${onActive};
                opacity: 0.9;
            }
            &:focus {
                border: 2px solid ${light};
            }
            `)};
            &::after {
                content: '+';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
            }
`;
const RippleContainer = styled.span`
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
`;
const Ripple = styled.span`
    display: block;
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    animation: ripple 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    ${({
        ripple: { width, posX, posY },
        theme: { secondary: { dark } },
    }) => (`
        width: ${width}px;
        height: ${width}px;
        top: ${posY - width / 2}px;
        left: ${posX - width / 2}px;
        background: ${dark};
        `)};

    @keyframes ripple {
        0% {
            opacity: 1;
            transform: scale(0);
        }
        1% {
            opacity: 0.1;
            transform: scale(0.1);
        }
        100% {
            opacity: 0.5;
            transform: scale(1);
        }
    }
`;

export {
    Button, Ripple, RippleContainer,
};
