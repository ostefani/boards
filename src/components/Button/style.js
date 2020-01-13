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
    will-change: transform, opacity;
    text-decoration: none;
    ${({
        size,
        theme: {
            secondary: { base, onBase, dark },
            radius: { regular },
            font: { robotoMedium },
            size: { small },
            shadow: { primary, onActive },
            animation: { timing: { regular: ease }, duration: { quick } },
        },
    }) => (`
            min-width: ${size === 'isFullWidth' ? '100%' : '144px'};
            box-shadow: ${primary};
            background-color: ${base};
            color: ${onBase}
            border-radius: ${regular};
            font-family: ${robotoMedium};
            font-size: ${small};
            transition: box-shadow ${quick}s ${ease}, background-color ${quick}s ${ease};
            &:hover {
                box-shadow: ${onActive};
                background-color: ${dark};
                transition: box-shadow ${quick}s ${ease}, background-color ${quick}s ${ease};
            }
            &:focus {
                background-color: ${dark};
                transition: box-shadow ${quick}s ${ease}, background-color ${quick}s ${ease};
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

export {
    Button, RippleContainer, Text,
};
